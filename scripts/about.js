class Circle {
    constructor(dom, xCoor, yCoor){
        this.dom = dom;
        this.xCoor = xCoor;
        this.yCoor = yCoor;
    }
}
var colorStorage = document.querySelector("#colorStorage").innerText;
var svgCircles = document.querySelector("#svgCircles");
var html = document.querySelector("html");

createCircleOnPage();

var circle1 = document.querySelector("#circle1"),
    circle2 = document.querySelector("#circle2"),
    circle3 = document.querySelector("#circle3"),
    circle4 = document.querySelector("#circle4"),
    circle5 = document.querySelector("#circle5"),
    circle6 = document.querySelector("#circle6"),
    circle7 = document.querySelector("#circle7");

var c1 = new Circle(circle1, circle1.getAttribute("cx"), circle1.getAttribute("cy")),
    c2 = new Circle(circle2, circle2.getAttribute("cx"), circle2.getAttribute("cy")),
    c3 = new Circle(circle3, circle3.getAttribute("cx"), circle3.getAttribute("cy")),
    c4 = new Circle(circle4, circle4.getAttribute("cx"), circle4.getAttribute("cy")),
    c5 = new Circle(circle5, circle5.getAttribute("cx"), circle5.getAttribute("cy")),
    c6 = new Circle(circle6, circle6.getAttribute("cx"), circle6.getAttribute("cy")),
    c7 = new Circle(circle7, circle7.getAttribute("cx"), circle7.getAttribute("cy"));
    
var circleObjArr = [c1, c2, c3, c4, c5, c6, c7];

function createCircleOnPage(){
    for(var i=1;i<8;i++){
        var cx = rngCircleXandY();
        var cy = rngCircleXandY();
        var r = rngCircleRadius();
        var id = i.toString();
        var str = createCircleString(cx, cy, r, id, i);

        svgCircles.innerHTML += str;
        circleMovementEvent(document.querySelector("#circle" + i));
    }
}

function createCircleString(cx, cy, r, num){
    var str = "<circle ";
    str += "cx='" + cx + "' ";
    str += "cy='" + cy + "' ";
    str += "r='" + r + "'";
    str += "class='circle' "
    str += "id='circle" + num + "'/>"
    return str;
}

function rngCircleXandY(){
    return Math.floor((Math.random() * 900) + 50)
}

function rngCircleRadius(){
    return Math.floor((Math.random() * 130) + 20)
}

function circleMovementEvent(thisCircle){
    html.addEventListener("mousemove", e =>{
        thisX = parseInt(e.clientX);
        thisY = parseInt(e.clientY);
        var count = 1;

        circleObjArr.forEach(function(cir){
            var xcoord=thisX/90*count + parseInt(cir.xCoor);
            var ycoord=thisY/90*count + parseInt(cir.yCoor);
            cir.dom.setAttribute("cx", xcoord);
            cir.dom.setAttribute("cy", ycoord);
            count+=2;
        })
    })
}