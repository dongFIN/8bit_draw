var container = document.querySelector(".container")
var pen = document.querySelector(".pencil");
var eraser = document.querySelector(".eraser")
var color = document.querySelector("#color")
var add = document.querySelector(".add")
var hexNum = document.querySelector(".hex")
var HIS = document.querySelector(".HIS")
var choseColor = document.querySelector(".choseColor")
var flag = 1

pen.addEventListener("click",function(){
    flag = 1
})
eraser.addEventListener("click",function(){
    flag = 0
})
add.addEventListener("click",function(){
    var histColor = document.createElement("div")
    histColor.classList.add("list")
    histColor.style.backgroundColor = color.value
    HIS.appendChild(histColor)
    beUsedColor()
})
choseColor.addEventListener("click",function(){
    flag = 1
})

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
        // console.log(i +" "+ j)
    }
}

var Convas = document.querySelector(".canvas")
var Context = Convas.getContext('2d');
Convas.addEventListener("pointerdown",xy)
function xy(event){
    event.preventDefault();
    // var color = document.querySelector("#color")
    var originX = Math.floor(event.clientX/15)
    var originY = Math.floor(event.clientY/15)
    var x = Math.floor(originX*15)-450
    var y = Math.floor(originY*15)-30
    if(flag){
        Context.fillStyle = color.value
        Context.fillRect (x, y, 15, 15)
    }
    else Context.clearRect (x, y, 15, 15)    
}
function beUsedColor(){
    const list = document.querySelectorAll(".list")
    for(var x of list){
        x.addEventListener("click", function(e){
            var setcolor = e.currentTarget
            var n = setcolor.style.backgroundColor
            hexNum.innerHTML = rgb2hex(n)
            // console.log(rgb2hex(n))
        })
    }
}
function rgb2hex(rgb) {
    rgb = rgb.match(/\d+/g);
    // console.log(rgb)
    function hex(x) {
        return (parseInt(x)).toString(16)
    }
    return ("#" +  hex(rgb[0]) +  hex(rgb[1]) +  hex(rgb[2]))
}
        
    
