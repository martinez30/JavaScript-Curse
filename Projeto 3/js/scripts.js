
$(function(){


// *** APIs ***
// clima, previsão 12 horas e previsão 5 dias: https://developer.accuweather.com/apis
// pegar coordenadas geográficas pelo nome da cidade: https://docs.mapbox.com/api/
// pegar coordenadas do IP: http://www.geoplugin.net
// gerar gráficos em JS: https://www.highcharts.com/demo

var APIKey = "PY0roiCMxyqHPG3r4AuboeCSBkH2FeVr";
var APIKeyMapBox = "pk.eyJ1IjoicGF1bG9tYXJ0aW5lejMwIiwiYSI6ImNrZGs3ZHd0YTBtMWUyem8wN2E3dHlndDIifQ.rOzewgwk5AI2NlsvIDZSvA";
var weatherObject = {
    cidade: "",
    estado: "",
    pais: "",
    temperatura: "",
    text_clima: "",
    icone: ""
};

function preencher_clima(cidade,estado,pais,temperatura,texto_clima,icone){
    var texto_local = cidade + ", " + estado + ". " + pais;
    $('#texto_local').text(texto_local);
    $('#texto_clima').text(texto_clima); 
    $('#texto_temperatura').html(temperatura + "&deg");
    $('#icone_clima').css("background-image", "url('" + weatherObject.icone + "')");
}

function gerarGrafico(horas,temperaturas){
    Highcharts.chart('hourly_chart', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Temperatura hora a hora'
        },
        xAxis: {
            categories: horas
        },
        yAxis: {
            title: {
                text: 'Temperatura (°C)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false
                },
                enableMouseTracking: false
            }
        },
        series: [{
            showInLegend: false,
            data: temperaturas
        }]
    });
}
gerarGrafico();

function pegar_previsaoHoraAHora(localCode){
    $.ajax({
        url: "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/" + localCode + "?apikey="+ APIKey +"&language=pt-br&metric=true",
        type: "GET",
        dataType: "json",
        success:function(data){
            var horarios = [];
            var temperaturas = [];

            for(a=0;a<data.length;a++){
                var hora = new Date(data[a].DateTime).getHours();
                horarios.push(String(hora) + "h");
                temperaturas.push(data[a].Temperature.Value );
                gerarGrafico(horarios,temperaturas);
                $('.refresh-loader').fadeOut();
            }
        },
        error: function(){
            console.log("erro");
            $('.refresh-loader').fadeOut();
        }
    });
}

function preencher_previsao_5dias(previsoes){
    $('#info_5dias').html("");
    var diasSemana = [
        "Domingo","Segunda-feira","Terça-feira","Quart-feira","Quinta-feira","Sexta-feira","Sábado"
    ]
    for(var a = 0; a < previsoes.length; a++){
        var dataHoje = new Date(previsoes[a].Date);
        var dia_semana = diasSemana[dataHoje.getDay()];
        var dia_noite = new Date();
        dia_noite = dia_noite.getHours();    
        if(dia_noite < 18)
            var iconNumber = previsoes[a].Day.Icon < 9 ? "0" + String(previsoes[a].Day.Icon) : String(previsoes[a].Day.Icon);
        else
            var iconNumber = previsoes[a].Night.Icon < 9 ? "0" + String(previsoes[a].Night.Icon) : String(previsoes[a].Night.Icon);
        icone = "https://developer.accuweather.com/sites/default/files/" + iconNumber + "-s.png";
        maxima = previsoes[a].Temperature.Maximum.Value;
        minima = previsoes[a].Temperature.Minimum.Value;

        elementoHTMLdia =  '<div class="day col">';
        elementoHTMLdia +=      '<div class="day_inner">';
        elementoHTMLdia +=          '<div class="dayname">';
        elementoHTMLdia +=              dia_semana;
        elementoHTMLdia +=          '</div>';
        elementoHTMLdia +=          '<div style="background-image: url(\'' + icone + '\')" class="daily_weather_icon"></div>';
        elementoHTMLdia +=          '<div class="max_min_temp">';
        elementoHTMLdia +=              minima + '&deg; / ' + maxima + '&deg;';
        elementoHTMLdia +=          '</div>';
        elementoHTMLdia +=      '</div>';
        elementoHTMLdia += '</div>';

        $('#info_5dias').append(elementoHTMLdia);

        elementoHTMLdia = "";
    }
}

function pegar_previsao_5dias(localCode){
    $.ajax({
        url: "http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + localCode + "?apikey="+ APIKey +"&language=pt-br&metric=true",
        type: "GET",
        dataType: "json",
        success:function(data){
            $('#texto_max_min').html(String(data.DailyForecasts[0].Temperature.Minimum.Value) + "&deg; /" + String(data.DailyForecasts[0].Temperature.Maximum.Value + "&deg"));   

            preencher_previsao_5dias(data.DailyForecasts);
        },
        error: function(){
            console.log("erro");
            $('.refresh-loader').fadeOut();
        }
    });
}

function pegar_tempo_atual(localCode){
    $.ajax({
        url: "http://dataservice.accuweather.com/currentconditions/v1/" + localCode + "?apikey="+ APIKey +"&language=pt-br",
        type: "GET",
        dataType: "json",
        success:function(data){

            weatherObject.temperatura = data[0].Temperature.Metric.Value;
            weatherObject.text_clima = data[0].WeatherText;

            var iconNumber = data[0].WeatherIcon < 9 ? "0" + String(data[0].WeatherIcon) : String(data[0].WeatherIcon);

            weatherObject.icone = "https://developer.accuweather.com/sites/default/files/" + iconNumber + "-s.png";

            preencher_clima(weatherObject.cidade,weatherObject.estado,weatherObject.pais,weatherObject.temperatura,weatherObject.text_clima,weatherObject.icone);
        },
        error: function(){
            console.log("erro");
            $('.refresh-loader').fadeOut();
        }
    });
}

function pegarCoordenadasDaPesquisa(input) {
    input = encodeURI(input);
    $.ajax({
        url : "https://api.mapbox.com/geocoding/v5/mapbox.places/" + input + ".json?access_token=" + mapboxToken,
        type: "GET",
        dataType: "json",
        success: function(data){
            // console.log("mapbox: ", data);
            try {
                var long = data.features[0].geometry.coordinates[0];
                var lat = data.features[0].geometry.coordinates[1];
                pegarLocalUsuario(lat, long);
            } catch {
                gerarErro("Erro na pesquisa de local");
            }

        },
        error: function(){
        console.log("Erro no Mapbox");
        gerarErro("Erro na pesquisa de local");
        
        }  
    });
}

function pegar_local_usuario(lat,long){
    $.ajax({
        url: "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" + APIKey + "&q=" + lat + "%2C" + long + "&language=pt-br",
        type: "GET",
        dataType: "json",
        success:function(data){
            try{
                weatherObject.cidade = data.ParentCity.LocalizedName;
            }
            catch{
                weatherObject.cidade = data.LocalizedName;
            }
            weatherObject.estado = data.AdministrativeArea.LocalizedName;
            weatherObject.pais = data.Country.LocalizedName;
            var localCode = data.Key;
            pegar_tempo_atual(localCode);
            pegar_previsao_5dias(localCode);
            pegar_previsaoHoraAHora(localCode);
        },
        error: function(){
            console.log("erro");
            $('.refresh-loader').fadeOut();
        }
    });
}

function pegar_Coordenadas(){ 
    var lat_padrao = -22.981361;
    var long_padrao = -43.223176;
    $.ajax({
        url: "http://www.geoplugin.net/json.gp",
        type: "GET",
        dataType: "json",
        success:function(data){
            if(data.geoplugin_latitude, data.geoplugin_longitude)
                pegar_local_usuario(data.geoplugin_latitude, data.geoplugin_longitude)
            else
                pegar_local_usuario(lat_padrao,long_padrao);
        },
        error: function(){
            console.log("erro");
        }
    });
}

pegar_Coordenadas()

$('#search-button').click(function(){
    $('.refresh-loader').show();
    var local = $('input #local').val();
    if(local){
        pegarCoordenadasDaPesquisa(local)
    }
    else{
        alert('Local inválido');
    }
})

$('#input#local').on('keypress',function(e){
    if(e.which == 13){
        $('.refresh-loader').show();
        var local = $('input #local').val();
        if(local){
            pegar_coordenadas_da_pesquisa(local)
        }
        else{
            alert('Local inválido');
        }
    }
})


});