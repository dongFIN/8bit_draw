var container = document.querySelector(".container")
var pen = document.querySelector(".pencil");
var eraser = document.querySelector(".eraser")
var color = document.querySelector("#color")
var add = document.querySelector(".add")
var list = [] //記錄歷史顏色陣列 (控制大小<=24)
var hexNum = document.querySelector(".hex")
var historyColor = document.querySelector(".HIS") //歷史顏色的container
var choseColor = document.querySelector(".choseColor") //如果變換顏色則自動切換至著色模式
var flag = 1 //1：著色, 0:橡皮擦

pen.addEventListener("click",function(){ flag = 1})
eraser.addEventListener("click",function(){ flag = 0})
choseColor.addEventListener("click",function(){ flag = 1})

add.addEventListener("click",creatList)
function creatList(event){
    event.preventDefault();
    if(list.length > 24){
        list = list.slice(1,25)
    }

    var reFlag = 0 // 判斷顏色是否重複
    for(var x = 0; x < list.length; x = x+1){
        if(list[x] == color.value) reFlag = 1
    }
    if(!reFlag) list.push(color.value)
    creatColor()
}
function creatColor(){  // 每次都重新建一次陣列
    historyColor.innerHTML = null
    for(var x = list.length - 1; x >= 0; x = x-1){
        var colorDiv = document.createElement("div")
        colorDiv.classList.add("colorList")
        colorDiv.style.backgroundColor = list[x]
        historyColor.appendChild(colorDiv)
        
    }
    let count = $(".colorList").length;
    let colors = document.querySelectorAll(".colorList");
    for(var idx = 0; idx < count; idx++){
        let delBtn = document.createElement("i");
        delBtn.classList.add("fas");
        delBtn.classList.add("fa-times-circle");
        delBtn.classList.add("delBtn")
        colors[idx].addEventListener("click", (e)=>{
            console.log(rgb2hex(e.target.parentElement.style.backgroundColor));
            // delete list[list.indexOf(rgb2hex(e.target.parentElement.style.backgroundColor))];
            let selectedColor = list.indexOf(rgb2hex(e.target.parentElement.style.backgroundColor));
            list = [...list.slice(0,selectedColor), ...list.slice(selectedColor+1,list.length)]
            console.log(e.target.parentElement);
            historyColor.removeChild(e.target.parentElement);
            // for(let ele of colors){
            //     if(ele.style.backgroundColor == e.target.parentElement.style.backgroundColor){
            //         historyColor.removeChild(ele);
            //     }
            // }
        })
        colors[idx].appendChild(delBtn);
        // colorDiv
    }
    beUsedColor()
}

function makeSVG(tag, attrs) { //引用函式
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
    }
}

var Canvas = document.querySelector(".canvas")  //見主要填色處
var Context = Canvas.getContext('2d');
Canvas.addEventListener("pointerdown",xy)
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
    const list = document.querySelectorAll(".colorList")
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
        let dest = (parseInt(x)).toString(16);
        while (dest.length < 2) {
            dest = "0" + dest;
        }
        return dest
    }
    
    return ("#" +  hex(rgb[0]) +  hex(rgb[1]) +  hex(rgb[2]))
}
        
    
