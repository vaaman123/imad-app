console.log('Loaded!');


var element = document.getElementById('main-text');
element.innerHTML = 'I am vaaman who are you';

var img = document.getElementById('madi');
var marginLeft = 10;
function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function (){
    var interval = setInterval (moveRight, 1);
    
};