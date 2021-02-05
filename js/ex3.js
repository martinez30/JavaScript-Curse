function transformarTemp(celsius)
{
    var F = (9* celsius/5) + 32;
    return F;
}

document.getElementById("converter").onclick = function() {
    var celsius = document.getElementById("temp_celsius").value;
    if(celsius == null)
    {
        alert("É necessário digitar uma temperatura");
    }
    else
    {
        celsius = parseInt(celsius);
        var fahren = transformarTemp(celsius)
        document.getElementById("temp_fahr").innerHTML = fahren;
    }
}

var copas = 1930;
document.getElementById("anos_copa").innerHTML = '<li>' + 'Ano copa ' + copas + '</li';

while(copas <= 2018)
{
    document.getElementById("anos_copa").innerHTML += '<li>' + 'Ano copa ' + copas + '</li';
    copas += 4; 
}


document.getElementById("calcular").onclick = function()
{
    var n1 = parseFloat(document.getElementById("nota1").value); 
    var n2 = parseFloat(document.getElementById("nota2").value);
    var faltas = parseFloat(document.getElementById("n_faltas").value);
    
    var media = (n1 + n2) /2;
    var presenca = (20* faltas) /2;

    var situacao;

    if(media >= 6.5 && presenca >= 0.7)
    {
        situacao = "Aprovado";
    }
    else if(media < 6.5 && presenca < 0.7)
    {
        situacao = "Reprovado por faltas e por média";
    }
    else if(media < 6.5)
    {
        situacao = "Reprovado por média";
    }
    else if(presenca < 0.7)
    {
        situacao = "Reprovado por faltas";
    }
    document.getElementById("result").innerHTML = situacao;
}

var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }

];

  var total = 0;
  document.getElementById("vendas_cursos").innerHTML = "";

  for(var b=0; b< vendas_cursos.length; b++)
  {
      if(vendas_cursos[b].reembolso == null)
      {
        var tabela = "";
        tabela = "<tr>";
        tabela += '<td>' + vendas_cursos[b].aluno +'</td>';
        tabela += '<td>' + vendas_cursos[b].data +'</td>';
        tabela += '<td>' + vendas_cursos[b].valor +'</td>';
        tabela += '</tr>';
        
        document.getElementById("vendas_cursos").innerHTML += tabela;
        total += vendas_cursos[b].valor;
      }
  }
  document.getElementById("total_vendas").innerHTML =  total;
  

