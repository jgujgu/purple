var hexaDemo4,
images = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg'
];
document.addEventListener('DOMContentLoaded', function(){
    hexaDemo4 = new HexaFlip(document.getElementById('hexaflip-demo4'), {set: images},{
        size: 500
    });
    document.getElementById('prev').addEventListener('click', function(){
        hexaDemo4.flipBack();
    }, false);

    document.getElementById('next').addEventListener('click', function(){
        hexaDemo4.flip();
    }, false);

}, false);

