$(document).ready(function(){
    
    $(window).scroll(function(){
        var ancho = $(window).width()
        if (ancho > 800) {
            var scroll = $(window).scrollTop()
            
            $('.slogan').css({
                transform : 'translate(0px,' + scroll/2 +'%)'
            })
            $('.slogan h3').css({
                fontSize: ''+ 25/(1 + scroll/100) +'px'
            })
            $('.acerca-de article').css({
                transform : 'translate(0px, -' + scroll/5 +'%)'
            })
        }
    })
    $(window).resize(function () {
        var ancho = $(window).width()
        if(ancho < 800){
            $('.acerca-de article').css({
                transform : 'translate(0px, 0px)'
            })
        }
      })

})
