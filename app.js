var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
        
    
context.fillStyle = 'rgb(200, 0, 0)';
context.fillRect (10, 10, 55, 50);
context.fillStyle = 'rgba(0, 0, 200, 0.5)';
context.fillRect (30, 30, 55, 50);

var image = document.getElementById('image'),
    image2 = document.getElementById('image2');

image.src = canvas.toDataURL();
image2.src = canvas.toDataURL('image/jpeg');

var container = document.querySelector(".container")

function makeSVG(tag, attrs) {
    var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs)
        el.setAttribute(k, attrs[k]);
    return el;
}

var rect =  makeSVG('rect', {x: 100, y: 0, width: 20, height: 20, fill: 'gray'});
for(var i = 0; i < 675; i = i+15){
    for(var j = 0; j < 375; j= j+15){
        if(((i+j)/15) %2 == 1){
            rect =  makeSVG('rect', {x: j, y: i, width: 15, height: 15, fill: 'white'});
        }
        else rect =  makeSVG('rect', {x: j, y: i, width: 15, height: 15, fill: '#ababab'});
        document.getElementById('s').appendChild(rect);
        console.log(i +" "+ j)
    }
}
var Convas = document.querySelector(".canvas")
console.log(Convas)
Convas.addEventListener("pointerdown",xy)
function xy(event){
    var originX = Math.floor(event.clientX/15)
    var originY = Math.floor(event.clientY/15)
    var x = Math.floor(originX*15)-556
    var y = Math.floor(originY*15)+2
    Context.fillStyle = color.value
    Context.fillRect (x, y, 15, 15)
    console.log(x +" & "+ y)
}
var color = document.querySelector("#color")
var Context = Convas.getContext('2d');
        
    
