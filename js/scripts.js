$(document).ready(function()
{



var Aula3 = 'Variaveis';
/* var latitude = 40.87663;
var longitude = -8.08373;
console.log(latitude);
console.log(longitude); */

var Aula4 = 'Strings';

/* var nome="João";
var sobrenome="Gomes";
var cpf="111.111.111-11";
var telefone='998887655';
var ddd="21";
var email = 'joao@gmail.com';
var biografia ='Joao comecou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos';
console.log('Nome completo: ' + nome + ' ' + sobrenome);
console.log('(' + ddd + ') ' + telefone);
console.log(nome[0]);
console.log(nome[3]);
console.log('Numero de caracteres do telefone ' + telefone.length) */

var Aula5 = 'Numbers'; 

/* var num1 = 20;
var num2 = 3;
var soma = num1 + num2;
var subtracao = num1 - num2;
var divisao = num1 / num2;
var multiplicacao = num1 * num2;
var media = (num1 + num2) / 2;
console.log('A media é: ' + media);
console.log(Math.pow(num1,4));
var increment = 20;
increment = increment + 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
console.log(increment); // O console mostrará 25
// esta estrutura variável = variável + valor, pode ser simplificada com o operador incremental +=
increment = 1;
increment += 5;
console.log(increment);
var idade ='17';
parseInt(idade);
idade++;
console.log(idade); */

var Aula6 = 'Bool';
/* var teste = 65 < 60;
console.log(teste); 
var vtype = true;
console.log(typeof vtype == "boolean"); */

var Aula7 = 'null e undefined';

/* var undf;
console.log(undf); 
var nome = 'Pedro';
console.log(nome[0]);*/

var Aula11 = 'Trabalhando com DOM';

/*var doc = document.getElementById("caixa_amarela").innerHTML;
document.getElementById("caixa_amarela").innerHTML = '<h1>' + doc + '</h1>';  */

var Aula12 = 'Funções';

/*function soma_numeros() 
{
    var x = 5;
    var y = 2;
    var soma = x + y;
    console.log(soma);
}
soma_numeros();
var peso = document.getElementById("peso").innerHTML;
var altura = document.getElementById("altura").innerHTML;
var pesoint = parseFloat(peso);
var alturaint = parseFloat(altura)
function valor_imc(pesoint,alturaint)
{
    var imc = pesoint / Math.pow(alturaint,2);
    return imc;
}
var imc_final = valor_imc(peso,altura);
console.log(pesoint + " Peso");
console.log(alturaint + " Altura");
console.log(imc_final + " IMC");
function soma_args(num1,num2)
{
    var soma = num1 + num2;
    return soma;
}
var somaf = "Resultado da soma: " + soma_args(10,25);
console.log(somaf); */

var Aula13 = "Arrays";

/*var alunos = ["João","Maria","Jose"];
var num_primos = [2,3,5,7,11,13];
console.log(alunos.length);
console.log(num_primos[2]);
console.log(alunos[3]);
var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
];
console.log(grupos.length);
console.log(grupos[1][1]);
grupos.unshift(["Boostrap"]);
console.log(grupos); */

var Aula14 = "Objetos";

// var funcionario = {
//     'nome': 'Pedro Souza Gomes',
//     'ano_nasc': 1972,
//     'cpf': '111.111.111.11',
//     'cargo': 'Analista de Sistemas'
// };
// console.log(funcionario['nome']);
// console.log(funcionario.ano_nasc);
// funcionario.cargo = "Gerente de T.I.";
// funcionario.cnh =" 1982736455";
// var cursos = [
//     {
//         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
//         'avaliacoes': 680,
//         'alunos': 2300,
//         'categorias': ['programacao', 'tecnologia']
//     },

//     {
//         'titulo': 'Aprenda PHP e faça sites dinâmicos',
//         'avaliacoes': 180,
//         'alunos': 350,
//         'categorias': ['desenvolvimento web', 'programacao']
//     },

//     {
//         'titulo': 'Excel do Zero ao Avançado',
//         'avaliacoes': 420,
//         'alunos': 1800,
//         'categorias': ['produtividade', 'gestão']
//     } 
// ];
// console.log(cursos[1].categorias[0]);
// cursos[2].categorias[1] = "administração de empresas";
// console.log(cursos[2].categorias[1]);

var Aula15 = "Metodos";

// var ano = 2020;
// var aluno = {
//     'nome': 'Maria',
//     'sobrenome': 'Pereira',
//     'ano_nasc': 1992,
//     'nome_completo': function () {
//         var n_completo = this.nome + " " + this.sobrenome;
//         return n_completo
//     },
//     'idade': function () {
//         var idade = ano - this.ano_nasc;
//         return idade;
//     }
// };
// console.log(aluno.nome_completo());
// console.log(aluno.idade());
// document.getElementById("tudo_obj");

var Aula16 = "Eventos";
// document.getElementById("click-me").onclick = function () {
//     alert("Voce clicou no botão");
// }
// document.getElementById("hover-me").onmouseover = function () {
//     alert("Voce passou por cima desse no botão com o cursor");
// }
// document.getElementById("leave-me").onmouseleave = function () {
//     alert("Voce passou o cursor nesse no botão e saiu");
// }
// document.onkeydown = function() {
//     alert('Você apertou alguma tecla' + event.keyCode);
// };

var Aula17 = "Manipulando CSS";

// var botao = document.getElementById("botao_cor");
// botao.onclick = function()
// {
//     this.style["background-color"] = "purple"
//     this.style.transform = "translateX(100px)";
// }

var Aula18 = "outros GetElement";

// var exemplo = document.getElementsByClassName("exemplo");
// exemplo[0].innerHTML = "teste1";
// console.log(exemplo);
// var exemplo = document.getElementsByTagName("p");
// console.log(exemplo);

// var Aula19 = "Loops For e for/in"
// for(var a=0; a < 5; a++)
// {
//     console.log(a);
// }
// var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];
// for(var b=0;b < alunos.length;b++)
// {
//     console.log(alunos[b]);
// }
// var carro = {
//     'Ano': 2018,
//     'Modelo': 'Fox',
//     'Cilindradas': '1.8',
//     'Combustível': 'Gasolina'
// }
// for (var prop in carro) {
//    console.log(prop + ': ' + carro[prop]);
// }
// var elementos = document.getElementsByTagName("p");
// console.log(elementos);
// for(var c = 0; c < elementos.length; c++)
// {
//     elementos[c].style.color = "orange";
//     elementos[c].style["font-weight"] = "bold";
// }

var Aula19 = "Loops While";

// var count = 0;
// // while(count<5)
// // {
// //     console.log(count);
// //     count++;
// // };
// var count2 = 10;
// do
// {
//     console.log(count2);
//     count2++;
// }while(count2<5);

var Aula20 = "Condicionais";

// var nota = 8;
// var falta = 5;
// // if(nota >= 7 && falta <= 4)
// // {
// //     console.log("Aprovado");
// // }
// // else
// // {
// //     console.log("Reprovado");
// // }
// if(nota < 7 || falta > 4)
// {
//     console.log("Reprovado");
// }
// else
// {
//     console.log("Aprovado");
// }
// var nome = "Ivan";
// if(nome)
// {
//     console.log("Nome: " + nome);
// }
// else
// {
//     console.log("O nome nao foi cadastrado");
// }

var Aula25 = "Aninhamento";

// var socio = false;
// var idade = 25;
// if(socio || idade >= 65)
// {
//     console.log("O ingresso é gratis");
// }
// else if(idade < 18)
// {
//     console.log("Preço a pagar: R$6,00");
// }
// else
// {
//     console.log("Preço a pagar: R$12,00");
// }
// var funcionarios = [
//     {
//         'nome': 'Carlos Henrique da Silva',
//         'idade': 45,
//         'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
        
//     },
//     {
//         'nome': 'Maria Helena Pereira',
//         'idade': 32,
//         'filhos': ['João Pedro Pereira de Souza']
        
//     },
//     {
//         'nome': 'José Feliciano Maia',
//         'idade': 39,
//         'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
        
//     }
// ];
// var list_element = document.getElementById("filhos");
// list_element.innerHTML = "";

// for(i=0;i< funcionarios.length; i++ )
// {
//     if(funcionarios[i].filhos)
//     {
//         var lista_filhos = funcionarios[i].filhos;
//         for(var b=0; b<lista_filhos.length; b++)
//         {
//             list_element.innerHTML += '<li>' + lista_filhos[b] + ' - Filho de: '+ funcionarios[i].nome + '</li>';
//         }
//     }
// }



var Aula24 = "BOM"

// window.onmousemove = function(e)
// {
//     console.log(e.pageY)
//     if(e.pageY  < 50)
//     {
//         alert('Não saia');
//     }
// }



var Aula25 = "Local Storage"

//window.localStorage.setItem("nome","João");
// console.log(localStorage["nome"]);
// window.localStorage.removeItem("nome");
// console.log(localStorage["nome"]);
// document.getElementById("enviar-nome").onclick = function() 
// {
//     var nome = document.getElementById("nome-usuario").value;
//     window.localStorage.setItem("nome", nome);
//     document.getElementById("name-field").style.display = "none";
//     document.getElementById("welcome-text").innerHTML = 'Olá ' + localStorage.nome +", tudo bem?";
//     document.getElementById("not-me").innerHTML = 'Não é ' + localStorage.nome +"?";
//     document.getElementById("welcome-area").style.display = "initial";
// }
// if(localStorage.nome)
// {
//     document.getElementById("name-field").style.display = "none";
//     document.getElementById("welcome-text").innerHTML = 'Olá ' + localStorage.nome +", tudo bem?";
//     document.getElementById("not-me").innerHTML = 'Não é ' + localStorage.nome +"?";
//     document.getElementById("welcome-area").style.display = "initial";
// } 
// document.getElementById("not-me").onclick = function()
// {
//     window.localStorage.removeItem("nome");
//     document.getElementById("welcome-area").style.display = "none";
//     document.getElementById("name-field").style.display = "initial";
// }



var Aula26 = "Data/hora";

// var data = new Date();
// console.log(data.getDate());
// console.log(data.getMonth());
// console.log(data.getFullYear());
// if(data.getDay() == 0)
//     console.log("Hoje é domingo");
// var dia_nasc = "2001-3-30";
// var ano_nasc = new Date(dia_nasc).getFullYear();
// var ano_atual = new Date().getFullYear();
// var idade = ano_atual - ano_nasc;
// console.log(idade);
// var data1= new Date();
// console.log(data1.getTime());
// var data1 = new Date("2018-3-20");
// var data2 = new Date("2018-4-6");
// data1 = data1.getTime();
// data2 = data2.getTime();
// var dataFinal = data2 - data1;
// dataFinal = dataFinal / 86400000;
// dataFinal = Math.floor(dataFinal);
// document.getElementById("dias_entrega").innerHTML = dataFinal;



var Aula27 = "Tempo"

// console.log("Mensagem 1");
// window.setTimeout(function(){
//     console.log("Mensagem 2");
// },3000);
// document.getElementById("mostrar-loader").onclick = function() 
// {
//     document.getElementById("spinner-loader").style["display"] = "initial"
//     window.setTimeout(function()
//     {
//         document.getElementById("spinner-loader").style["display"] = "none"
//     },3000);
// }
// var count = 0;
// var inter = window.setInterval(function()
// {
//     console.log(count);
//     count++;
//     if(count == 5)
//     {
//         window.clearInterval(inter);
//     }
// },1000)
// //Forma do Ivan
// var inter = window.setInterval(function()
// {
// var hoje = new Date();
// var hora = hoje.getHours();
// var minutos = hoje.getMinutes();
// var segundos = hoje.getSeconds();
// function tempoZero(time)
// {
//     console.log(time);
//     var retorno = time;
//     if(time < 10)
//     {
//         retorno = '0' + time.toString();
//     }
//     return retorno;
// }
//     document.getElementById("relogio").innerHTML = tempoZero(hora) + ":" + tempoZero(minutos) + ":" + tempoZero(segundos);
// },1000);
// // Minha forma
// // var inter = window.setInterval(function()
// // {
// //     var zero;
// //     if(segundos < 10)
// //     {
// //         zero = 0;
// //     }
// //     else
// //     {
// //         zero ="";
// //     }
// //     var horaatual = hora + ':' + minutos + ':' + zero+segundos;
// //     console.log(horaatual);
// //     document.getElementById("relogio").innerHTML = horaatual;
// //     segundos++;
// //     if(segundos == 60)
// //     {
// //        segundos = 0;
// //        minutos++;
// //     }
// //     if(minutos == 60)
// //     {
// //         minutos = 0;
// //         hora++;
// //     }
// //     if(hora == 24)
// //     {
// //         hora = 0;
// //     }
// // },1000);



var Aula28 = "Switch"

// function valor_pedagio(categoria)
// {
//     switch(categoria)
//     {
//         case 1:
//             return 11.22;
//             break;
//         case 2:
//             return 22.45;
//             break;
//         case 3:
//             return 16.88;
//             break;
//         case 4:
//             return 33.65;
//             break;
//         default:
//             return "Categoria não encontrada";
//         }
// }
// categoria = 1;
// console.log(valor_pedagio(categoria));



var Aula29 = "Formulários Parte 1"

// document.getElementById("mostrar_opcao").onclick = function()
// {
//     var campo = document.getElementById("options");
//     var op = campo.options.selectedIndex;
//     var valor = campo.options[op].innerHTML;
//     document.getElementById("opcao_selecionada").innerHTML = valor;
//         var indice = document.getElementById("options").value;
//         document.getElementById("opcao_selecionada").innerHTML = indice;
// }
// var radio;
// document.getElementById("mostrar_radio").onclick = function () {
//     radio = document.getElementsByName("genero");
//     var radio_selected;
//     for (var a = 0;  a < radio.length; a++) {
//         if (radio[a].checked) {
//             radio_selected = radio[a].value;
//         }
//     }
//     document.getElementById("radio_selecionado").innerHTML = radio_selected;
// };



var Aula30 = "Formulários Parte 2"

// document.getElementById("mostrar_check").onclick = function() 
// {
//     document.getElementById("check_selecionado").innerHTML = "";
//     var check = document.getElementsByName("interesse");
//     for(i = 0; i< check.length;i++)
//     {
//         if(check[i].checked)
//         {
//             document.getElementById("check_selecionado").innerHTML += '<li>' + check[i].value + '</li>';           
//         }
//     }
// }
// document.getElementById("mostrar_data").onclick = function() 
// {
//     var data_select = document.getElementById("data_evento").value;
//     var data_completa = new Date(data_select);
//     document.getElementById("data_selecionada").innerHTML = data_completa;
// }



var Aula45 = "OnChange";

// document.getElementById("escolaridade").onchange = function() 
// {
//     var campo = document.getElementById("escolaridade");
//     var indice = campo.options.selectedIndex;
//     var valor = campo.options[indice].innerHTML;
//     document.getElementById("escolaridade_selecionada").innerHTML = valor;
// }
// var check = document.getElementsByName("lanche");
// for (var a = 0;  a < check.length; a++) {
//     check[a].onchange = function () {
//         document.getElementById("check_selecionado").innerHTML = "";
//         for (var b = 0;  b < check.length; b++) {
//             if (check[b].checked) {
//                 document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
//             }
//         }
//     }  
// }



var Aula34 = "jQuery - Sintaxe";

// $("#esconder").click(function()
// {
//     $(".exemplo").hide();
// });



var Aula35 = "jQuery - Manipulação";

/*var conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);
$("#paragrafo-html").html("Mudar conteudo");
var conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);
var url = $("#paragrafo-link").attr("href");
console.log(url);
$("#paragrafo-link").attr("href","http://www.udemy.com");
var url = $("#paragrafo-link").attr("href");
console.log(url);
$("#mudar_imagem").click(function(){
    $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    $("#mudar_imagem").hide();
}); 
$("#paragrafo-empty").remove();*/



var Aula36 = "jQuery - Loop Each";

// var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];
// $.each(lista,function(indice,valor)
// {
//     console.log('O elemeno de indice [' + indice + '] tem o valor de: ' + valor);
// });
// var pessoa = {
//     'nome': 'João Pedro',
//     'DN': '20/01/1990',
//     'CPF': '111.111.111-11'
// };
// $.each(pessoa, function( chave, valor ) {
//     console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
// });
// var cursos = $("#interesses li");
// $.each(cursos, function (indice,valor)
// {
//     console.log($(valor).text());
// });

var Aula37 ="jQuery - Formularios";

// var conteudo_input = $("#campo_nome").val();
// console.log(conteudo_input);
// $("#options").change(function(){
//     var novo_selecionado = $('#options').find(":selected").text();
//     console.log(novo_selecionado);
// });
// $("input[name='interesse']").change(function() {
//     var checkboxes_selecionados = $("input[name='interesse']:checked");
//     var textos = [];
//     $.each(checkboxes_selecionados, function( index, value ) {  
//         textos.push($(value).parent("span").text());
//     });
//     console.log(textos);
// });

var Aula38 = "jQuery - Manipulação de CSS";

// $("#adicionar_classe").click(function()
// {
//     $("#paragrafo-classes").addClass("styling");
// });
// $("#remover_classe").click(function()
// {
//     $("#paragrafo-classes").removeClass("styling");
// });
// $("#alternar_classe").click(function()
// {
//     $("#paragrafo-classes").toggleClass("styling");
// });

var Aula39 = "jQuery - Eventos";

// $("#nome").keyup(function()
// {
//     var conteudo = $("#nome").val();

//     if(conteudo)
//     {
//         $("#confirmar").css("display","initial");
//     }
//     else
//     {
//         $("#confirmar").css("display", "none");
//     }
// });

var Aula40 = "jQuery - Efeitos";

// $("#botao-esconder").click(function()
// {
//     $(this).hide(1000,function()
//     {
//         $("#texto-escondido").show();
//     });
// })
// $("#toggle-tab").click(function()
// {
//     $("#tab-content").slideToggle();
//     $("#toggle-tab").toggleClass("flip");
// });

var Aula41 = "jQuery - Animate";

// $("#animar").click(function()
// {
//     $("#quadrado").animate( {
//         width: "+=100px"
//     },5000);
//     $("#quadrado").animate( {
//         height: "+=100px"
//     },5000);
// });

var Aula42 = "jQuery - Metodos em cadeia";

// $("#animar").click(function()
// {
//     $("#quadrado").animate( {
//         width: "+=100px"
//     },500).animate( {
//         height: "+=100px"
//     },500,function()
//     {
//         $("#quadrado").css("background-color",'green');
//     })
// });

var Aula43 = "Funcções CallBack"

// function pegar_usuario(callback){
//     window.setTimeout(function(){
//         var u = {
//             'nome': 'João'
//         };
//         callback(u);
//     },2000)
// }     
// pegar_usuario(function(user){
//     console.log('Olá ' + user.nome + ', como vai?');
// });

var Aula44 = "Lidando com erros";

//     function pegar_usuario(){
//         window.setTimeout(function(){
//             var u = {
//                 'nome': 'João'
//             };
//             return u;
//         },1000)
//     }
//     function saudar_usuario(user){
//         console.log("Olá" + user.nome + ', como vai?');
//     }
//     var user = {'nome':''};
// try{ 
//     if(user){
//         throw 'Nome em branco';
//     }
//     saudar_usuario(user);    
// }
// catch(e){
//     console.log(e);
// }
// console.log("Novo comando para executar ao final");

var Aula45 = "If Ternário";

// var nome = "a";
    // if (nome) {
    //     var mensagem = "Olá " + nome;
    // } else {
    //     var mensagem = "Nome não informado";
    // }
// var mensagem;
// nome ? mensagem = "Olá " + nome : mensagem = "Nome não informadao";
// mensagem = nome ?  "Olá " + nome : "Nome não informadao";
// console.log(mensagem);
// nome ="Ivan";
// idade = 32;
// mensagem = (nome && idade) ? "Olá " + nome + ', voce tem: ' + idade + 'anos.' 
//     : (!nome && !idade) ? "Nome e idade não informados" 
//     : (!idade) ? "Idade Não informada"
//     : "Nome não informado";
//     console.log(mensagem);

var Aula46 = "Escopo";


// function criar_nome() {
//     nome = 'Maria';
//     console.log(nome); // O console mostrará 'Maria'
// }
// criar_nome();
// console.log(nome);
// var x=0;
// if(x == 0){
//     let nome = "Mariana";
// }
// console.log(nome);
// for(i=0; i<5; i++){
//     console.log(i);
// }
// const PI = "3.14159";

var Aula47 = "Namespaces";

// var meuWebApp = {
//     'nome' : 'Felipe',
//     'ver_nome' : function(){
//         console.log(meuWebApp.nome);
//     }
// };
// meuWebApp.ver_nome();
// var meuWebApp = (function(){
//     var nome = "Felipe";
//     return {
//         'ver_nome': function(){
//             return nome;
//         },
//         'mudar_nome' : function(novo_nome){
//             nome = novo_nome;
//         },
//         'apagar_nome' : function () {
//             nome = null;
//         }
//     }
// })();
// meuWebApp.mudar_nome("Paulo");
// console.log(meuWebApp.ver_nome());
// meuWebApp.apagar_nome();
// console.log(meuWebApp.ver_nome());

var Aula48 = "JSON";

// var funcionario = {
//     'nome': "Fernanda Costa",
//     'd_nascimento': '1988-10-01',
//     'CPF': '111.111.111-11'
// };
// var funcionario_json = JSON.stringify(funcionario);
// var funcionario_objeto = JSON.parse(funcionario_json);
// console.log(funcionario_objeto);
// var info = '{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}';
// var info_string = JSON.parse(info);
// console.log(info_string);
// console.log("A umidade é de: ", info_string.main.humidity + '%');

var Aula50 = "AJAX - Request";

// var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//     }
// };
// xhttp.open("GET", "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02");
// xhttp.send();

var Aula51 = "AJAX - Response";

// function mostrar_temp(dados){
//     var dados_obj = JSON.parse(dados);
//     console.log(dados_obj.main.temp);
// }
// function mostrar_dados(dados){
//     var dados_obj = JSON.parse(dados);
//     console.log(dados_obj);
// }
// function tempo_londres() {
//     var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");               
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.responseText); 
//         } 
//     };
//     xhttp.open("GET", "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22");
//     xhttp.send();
// }
// tempo_londres(mostrar_temp);
// tempo_londres(mostrar_dados);

var Aula52 = "AJAX - com jQuery";

// function apresentar_dados(data){
//     $('#temp_atual').html(data.main.temp);
//     $('#temp_max').html(data.main.temp_max);
//     $('#temp_min').html(data.main.temp_min);
// }
// function pegar_dados(callback){
// $.ajax({
//     url: "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02",
//     type: "GET",
//     dataType: "json",   
// })
// //ou essa forma
// .done(function(data){
//     callback(data);
// }).fail(function(){
//     console.log('Erro na requisição');
// });
// // ou dessa forma
// // success: function(data){
// //         console.log(data.main.temp); 
// //     },
// //     error: function(){
// //         console.log('Erro na requisição');
// //     }
// }
// pegar_dados(apresentar_dados)








});