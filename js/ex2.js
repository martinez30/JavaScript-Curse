
var num1 = document.getElementById("num_1").innerHTML;
var num2 = document.getElementById("num_2").innerHTML;

num1 = parseInt(num1);
num2 = parseInt(num2)

var resul = '<strong>' + (num1+num2) + '</strong>';
document.getElementById('resultado').innerHTML = resul;

var celsius = document.getElementById("caixa_azul").innerHTML;
celsius = parseInt(celsius);

function transformarTemp(celsius)
{
    var F = (9* celsius/5) + 32;
    return F;
}

document.getElementById('caixa_amarela').innerHTML = transformarTemp(celsius);

var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]; 
    

var array = grupos.slice(1,);
array.push(
    ["Mariana", "Felipe", "Carla"]
);

console.log(array);

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4
}
   
document.getElementById("categoria_principal").innerHTML = curso.categoria[0];

function soma(curso) {
    var total = curso.n_aval_1_estrela + curso.n_aval_2_estrelas + curso.n_aval_3_estrelas + curso.n_aval_4_estrelas + curso.n_aval_5_estrelas;
    return total;
}

function media(curso) {
    
    var star5 = 5 * curso.n_aval_5_estrelas;
    var star4 = 4 * curso.n_aval_4_estrelas;
    var star3 = 3 * curso.n_aval_3_estrelas;
    var star2 = 2 * curso.n_aval_2_estrelas;
    var star1 = curso.n_aval_1_estrela;
    var media = (star5 + star4 + star3 + star2 + star1) / soma(curso);
    return media;
}

var somaCurso = soma(curso);
var mediaCurso = media(curso);
document.getElementById("total_aval").innerHTML = somaCurso;
document.getElementById("media_aval").innerHTML = media(curso).toFixed(2);

var nome = "Pedro";
var sobrenome = " Gomes";
var email = "pedrogomes@gmail.com";


var code = '<div class="tableBox"> <table> <tr> <th>Nome Completo</th> <th>Email</th> </tr><tr> <td>' + nome + sobrenome +'</td> <td>' + email + '</td></tr></table></div>';

document.getElementById("tabela").innerHTML = code;


