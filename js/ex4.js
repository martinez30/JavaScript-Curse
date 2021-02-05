// 1)
document.getElementById("estados").onchange = function()
{
    window.localStorage.setItem("estado",document.getElementById("estados").value);  
}

if(localStorage.estado)
{
    document.getElementById("estados").value  = localStorage.estado;
}

// 2)

function tempozero(number)
{
    if(number < 10)
    {
        return "0" + number.toString();
    }
    else
    {
        return number.toString();
    }
}

function format_date(timestamp)
{
    var dia = tempozero(new Date(timestamp).getDate());
    var mes = tempozero(new Date(timestamp).getMonth() + 1);
    var ano = tempozero(new Date(timestamp).getFullYear());
    return dia + "-" + mes + "-" + ano;
}

document.getElementById("confirmar_pedido").onclick = function()
{
    var tipo_de_envio = document.getElementById("envios").value;
    
    if(tipo_de_envio == "escolha")
    {
        alert("Escolha um modelo de envio");
    }
    else
    {
        var dias;
        if(tipo_de_envio == "express")
        {
            dias = 12;
        }
        else
        {
            dias = 18;
        }
        var data_pedido = new Date().getTime();
        var data_prevista = data_pedido + (dias * 86400000);
    
        document.getElementById("data_pedido").innerHTML = format_date(data_pedido);
        document.getElementById("data_entrega").innerHTML = format_date(data_prevista);
    }
    
}

// 3)
var iniciado = false, hora_atual, hora_inicio, tempo_passado, init_cronometro, horas = 0, minutos = 0, segundos = 0, milisegundos = 0, resto = 0;

document.getElementById("comecar_parar").onclick = function()
{
    if(!iniciado)
    {
        iniciado = true;
        document.getElementById("comecar_parar").innerHTML = "Parar"
        if(!hora_inicio)
        {
            hora_inicio = new Date().getTime();
        }
        else
        {
            hora_inicio = new Date().getTime() - tempo_passado;
        }
        init_cronometro = window.setInterval(function()
        {
            hora_atual = new Date().getTime();
            tempo_passado = hora_atual - hora_inicio;

            horas = Math.floor(tempo_passado / 3600000);
            resto = tempo_passado - (horas * 3600000) 
            minutos = Math.floor(resto / 60000);
            resto -= (minutos * 60000); 
            segundos = Math.floor(resto / 1000);
            resto -= (segundos * 1000); 
            milisegundos = resto;
            

            document.getElementById("cronometro").innerHTML = tempozero(horas) + ":" + tempozero(minutos) + ":" + tempozero(segundos)  + " " + milisegundos.toString();
        },10)
    }
    else
    {
        window.clearInterval(init_cronometro);
        document.getElementById("comecar_parar").innerHTML = "Começar";
        iniciado = false;
    }
}

function tempozero(time)
{
    if(time < 10)
    {
        return "0" + time.toString();
    }
    else
    {
        return time.toString();
    }
}

document.getElementById("zerar").onclick = function()
{
    hora_inicio = new Date().getTime();
    document.getElementById("cronometro").innerHTML = "00:00:00 000";
    tempo_passado = 0;
}

//4)

// var carros = [

//     {
//         'placa': 'AAA-0198',
//         'categoria': '1',
//     },

//     {
//         'placa': 'HBP-2837',
//         'categoria': '2',
//     },

//     {
//         'placa': 'PLQ-0928',
//         'categoria': '4',
//     },

//     {
//         'placa': 'KQE-2093',
//         'categoria': '4',
//     },

//     {
//         'placa': 'AMR-9087',
//         'categoria': '4',
//     },

//     {
//         'placa': 'BQE-8111',
//         'categoria': '3',
//     },

//     {
//         'placa': 'GXL-9001',
//         'categoria': '2',
//     },

//     {
//         'placa': 'KPM-7740',
//         'categoria': '1',
//     }

// ];

// var valor = 0;
// for(i=0;i<carros.length;i++)
// {
//     switch(carros[i].categoria)
//     {
//         case '1':
//             valor += 11.22;
//             break;
//         case '2':
//             valor += 22.45;
//             break;
//         case '3':
//             valor += 16.88;
//             break;
//         case '4':
//             valor += 33.65;
//             break; 
//     }
//     console.log(valor);
// }
// document.getElementById("faturamento_total").innerHTML = valor;