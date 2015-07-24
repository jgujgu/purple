var hexa,
images = [
    './img/commitcat.gif',
    './img/diffepedia.gif',
    //'./img/go.gif',
    './img/pinyintype.gif',
    './img/clamorous.gif',
];
document.addEventListener('DOMContentLoaded', function(){
    hexa = new HexaFlip(document.getElementById('hexaflip'), {set: images},{
        size: 350
    });

    var i = 0;
    setInterval(function() { i++; if (i <= images.length) { hexa.flipBack(); } }, 500);

    document.getElementById('prev').addEventListener('click', function(){
        hexa.flipBack();
    }, false);

    document.getElementById('next').addEventListener('click', function(){
        hexa.flip();
    }, false);
}, false);

