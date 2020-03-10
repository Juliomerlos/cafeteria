$(document).ready(function () {
    $('.menu a').each(function (i,element) { 
         $(this).css({
             top: '-200px'
         })
         $(this).animate({'top': '0px'}, 1500 + (i*500))
    }); 
    if( $(window).width() > 800) {
        $('.slogan').css({
            opacity: 0,
            marginTop: 0
        })
        $('.slogan').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500)
    }
    var acercaDe = $('#acerca-de').offset().top,
    platillos = $('#platillos').offset().top,
    galeria = $('#galeria').offset().top,
    ubicacion = $('#ubicacion').offset().top

    $('#btn1').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop : acercaDe - 100
        })
    })
    $('#btn2').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop : platillos - 30
        })
    })
    $('#btn3').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop : galeria
        })
    })
    $('#btn4').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop : ubicacion 
        })
    })
})