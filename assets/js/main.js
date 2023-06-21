$(function(){
    // Alerta - Links:
var links = $('.link-tiem');
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

initSlide();

function initSlide(){
    let delay = 4000;
    let slideCount = $(".scroller-item").length;
    
    for(let i = 0; i<slideCount; i++){
        if(i!=0) $("#slide-bullets").append(`<span class='bullet' count='${i}'></span>`);
        else $("#slide-bullets").append(`<span class='bullet active' count='${i}'></span>`);
    }
    slideAutoPlay(delay, slideCount);
}
    
function slideAutoPlay(delay, slideCount){
    let currentIndex = 1;
    setInterval(function(){  
        if(currentIndex == slideCount) currentIndex = 0;
        changeSlide(currentIndex);
        $(".bullet.active").removeClass('active');
        $(".bullet").eq(currentIndex).addClass('active');
        currentIndex++;
    }, delay)
}

function changeSlide(currentIndex){
    var offsetX = $(".scroller-item").eq(currentIndex).offset().left - $("#team-scroller").offset().left;
    if(currentIndex > 1)offsetX= offsetX*currentIndex;
    $("#team-scroller").stop().animate({'scrollLeft':offsetX})
}

$(window).resize(function(){
    $("#team-scroller").stop().animate({'scrollLeft':0})
})
})