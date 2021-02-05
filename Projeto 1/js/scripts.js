
// Menu Mobile


document.getElementById("hamburguer-icon").onclick = function()
{
   document.getElementById("sliding-header-menu-outer").style.right = "0";
}

document.getElementById("sliding-header-menu-close-button").onclick = function()
{
   document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}


// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unselected_color = "#646872";
var selected_color = "#2A2D34";

var aboutTabs = document.getElementsByClassName("single-tab");

for(i=0; i < aboutTabs.length;i++)
{
  aboutTabs[i].onclick = function()
  {  

    for(j=0;j<aboutTabs.length;j++)
    {
      aboutTabs[j].style["background-color"] = unselected_color;
      aboutTabs[j].style["font-weight"] = "regular";
    }

    this.style["background-color"] = selected_color;
    this.style["font-weight"] = "bold";

    var selecionado = this.innerHTML;

    document.getElementById("box-text").innerHTML = aboutUs[selecionado];
  }
}

// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

//service-previous
//service-next
//service-title
//service-text

var atual = 0;

document.getElementById("service-previous").onclick = function()
{
    if(atual == 0)
    {
      atual = 2;
    }
    else
    {
      atual--;
    }
    document.getElementById("service-title").innerHTML = our_services[atual].title;
      document.getElementById("service-text").innerHTML = our_services[atual].text;
}


document.getElementById("service-next").onclick = function()
{
    if(atual == 2)
    {
      atual = 0;
    }
    else
    {
      atual++;
    }
    document.getElementById("service-title").innerHTML = our_services[atual].title;
    document.getElementById("service-text").innerHTML = our_services[atual].text;
}

// Data Footer

var ano = new Date;

ano = ano.getFullYear();

document.getElementById("current_year").innerHTML = ano;

// current-year


//API Google Maps

//AIzaSyA3Mk6UPtrkg9y3Y8wl_vfLhO9JnSkYuo0