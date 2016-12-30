var imagens = [
    'url(../img/bg/slider/1.png)'
    , 'url(../img/bg/slider/2.png)'
    , 'url(../img/bg/slider/3.png)'
    , 'url(../img/bg/slider/4.png)'
]
    , imgindex = 0
    , $header = $('#slider');
setInterval(function () {
    $header.css('background-image', imagens[imgindex++ % imagens.length]);
}, 4000);