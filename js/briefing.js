$(window).load(function() {
    // start up after 2sec no matter what
    window.setTimeout(function(){
        $('body').removeClass("loading").addClass('loaded');
    }, 0);
});

$(".hamburger").click(function () {
    $("#filtro").fadeIn()
    $("#filtro").css("background-color", "rgba(51, 51, 51, 0.4)")
    $(".menu-mobile").css("left", "0vw")
    $(".menu-mobile").css("opacity", "1")
    
});

$(".hamburger-close").click(function () {
    $("#filtro").css("background-color", "rgba(51, 51, 51, 0.0)")
    $("#filtro").fadeOut()
    $(".menu-mobile").css("opacity", "0")
    $(".menu-mobile").css("left", "-100vw")
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
