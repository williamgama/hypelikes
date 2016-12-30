
$(".hamburger").click(function () {
    $("#filtro").fadeIn()
    $("#filtro").css("background-color", "rgba(51, 51, 51, 0.4)")
    $(".menu-mobile").css("left", "0vw")
    $(".menu-mobile").css("opacity", "1")
    
});

$(".hamburger-close, .inicio, .atuacao, .portfolio, .depoimentos, .rsocial, .ads, .criacao, .identidade, .direcao, .interfaces, .sites, .extras, .atendimento, .alteracoes, .entrega, .contato").click(function () {
    $("#filtro").css("background-color", "rgba(51, 51, 51, 0.0)")
    $("#filtro").fadeOut()
    $(".menu-mobile").css("opacity", "0")
    $(".menu-mobile").css("left", "-100vw")
});

var nav = $('.cabecalho-desktop');

$(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
        nav.addClass("fixar");
    } else {
        nav.removeClass("fixar");
    }
});

$(".open").click(function () {
    $(".drop").css("max-height", "180px")
    $(".drop a").css("opacity", "1")
    $(".open").css("display", "none")
    $(".close").css("display", "flex")
});

$(".close").click(function () {
    $(".drop a").css("opacity", "0")
    $(".drop").css("max-height", "0px")
    $(".close").css("display", "none")
    $(".open").css("display", "flex")
});

$('.scroll').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 2500);
            return false;
        }
    }
});

$("#carousel").owlCarousel({

    navigation: false, // Show next and prev buttons
    slideSpeed: 300
    , paginationSpeed: 400
    , singleItem: true
    , autoHeight: true

    // "singleItem:true" is a shortcut for:
    // items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

});

$("#carousel-imagens").owlCarousel({

    autoPlay: false, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

});

