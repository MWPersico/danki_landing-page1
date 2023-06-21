// Alerta - Links:
var links = document.querySelectorAll('.link-item');
for(element of links){
    if(element.innerText != "home")element.addEventListener('click', alertLinks)
}

function alertLinks(){
    alert('Essa demonstração é apenas da página \'home\'...\nMas posso montar um site completo para seu negócio ou ideia!')
}

// Alerta - Formulário:
function alertForm(){
    alert('Este projeto não armazena dados, mas posso fazer isso no seu site!!\nwillian.marcos7@hotmail.com\n11 99167-3136');
}

// Menu - Hamburguer:

var burguer = document.getElementById('hamburguer-menu');
var menu = document.getElementById('header-links-list');
burguer.addEventListener('click', showMenu)

function showMenu(){
    burguer.classList.toggle('active');
    menu.classList.toggle('show');
}