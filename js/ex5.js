//1)

$(document).ready(function(){


// var paises;
// function adicionar_dados(data){
//     // metodo de adicionar com jQuery
//     //$('#paises').append($("<option></option>").attr("value", data.).text(data.name));
//     // metodo de adicionar com JS
//     document.getElementById("paises").innerHTML += '<option value="' + data.alpha3Code + '"> ' + data.name + '</option>';
// }
// function pegar_dados(callback){
// $.ajax({
//     url:  "https://restcountries.eu/rest/v2/all",
//     type: "GET",
//     dataType: "json"
// }).done(function(data){
//     for(i=0;i<data.length;i++){
//        callback(data[i]);
//     }
// }).fail(function(){
//     console.log("Erro");
// })
// }
// pegar_dados(adicionar_dados);

//2)
// var cursos = [
//     {
//         "titulo": "PHP",
//         "aval": []
//     },
//     {
//         "titulo": "Javascript",
//         "aval": [5,5,4.5,4,5,5,5,4.5]
//     },
//     {
//         "titulo": "Python",
//         "aval": [5,5,4,4,5,3,5,4,4,5]
//     },
//     {
//         "titulo": "Machine Learning",
//         "aval": [5,5,4.5]
//     }
// ];
// var somafinal;
// function avaliacao(cursos){
//     for(i=0;i<cursos.length;i++){
//         try{
//             if(cursos[i]["aval"].length == 0)
//             throw "Curso " + cursos[i].titulo + " não possui nenhum avaliação";
//             else if(cursos[i]["aval"].length < 5)
//                 throw "Curso " + cursos[i].titulo + " não tem avaliações suficientes";
            
//                 var soma = 0;
//                 for(var b=0; b < cursos[i].aval.length; b++)
//                 {
//                     soma += cursos[i].aval[b];
//                 }

//                 var media = soma / cursos[i].aval.length;

//                 console.log('Curso ' + cursos[i].titulo + ' tem media de ' + media.toFixed(2) + ' avaliações');
//         }
//         catch(e){
//             console.log(e);
//         }
//     }
// }
// avaliacao(cursos);

//3)
// var users = {
//     "usuarios" : {
//             "33884h": "João Gomes",
//             "43585f": "Maria Luisa",
//             "93661h": "Pedro Henqrique",
//             "23172g": "Paula Carvalho",
//         },
//     "acessos" : [
//     {
//         "usuario": "33884h",
//         "data": "10/07/18"
//     },
//     {
//         "usuario": "33884h",
//         "data": "11/07/18"
//     },
//     {
//         "usuario": "43585f",
//         "data": "19/07/18"
//     },
//     {
//         "usuario": "93661h",
//         "data": "24/07/18"
//     },
//     {
//         "usuario": "23172g",
//         "data": "13/08/18"
//     },
//     {
//         "usuario": "93661h",
//         "data": "14/08/18"
//     }
// ],
//     "imprimir_acesso" : function(){
//         for(i=0;i<this.acessos.length;i++){
//             $("#acessos").append($('<p>Acesso de '+ this.usuarios[this.acessos[i].usuario] +', no dia '+ this.acessos[i].data +'</p>'));
//         }
//     }
// };
// users.imprimir_acesso();

//4)

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
function buscar_pergunta(callback){
$.ajax({
    url: "https://opentdb.com/api.php?amount=1&category=11",
    type : "GET",
    dataType : "json"
}).done(function(data){
    callback(data.results[0]);
}).fail(function(){

});
}
function gerar_perguntar(pergunta){
    $("#questao").html(pergunta.question);
    var reposta_correta = pergunta.correct_asnwers;
    var respostas = [];
    respostas = pergunta.incorrect_asnwers;
    respostas = shuffle(respostas);
    console.log("respota correta: ",resposta_correta);
    console.log("respota correta: ",respostas);

}

buscar_pergunta(gerar_perguntar);



});