// class Quad{
//     constructor(dom, xCoor, yCoor){
//         this.dom = dom;
//         this.xCoor = xCoor;
//         this.yCoor = yCoor;
//     }
// }

// var quad1 = document.querySelector("#borderBoxB"),
//     quad2 = document.querySelector("#colorBoxL"),
//     quad3 = document.querySelector("#colorBoxR"),
//     quad4 = document.querySelector("#aboutHeadPara"),
//     quad5 = document.querySelector("#borderBoxF");

// var q1 = new Quad(quad1, window.getComputedStyle(quad1).getPropertyValue("left"), window.getComputedStyle(quad1).getPropertyValue("top")),
//     q2 = new Quad(quad2, window.getComputedStyle(quad2).getPropertyValue("left"), window.getComputedStyle(quad2).getPropertyValue("top")),
//     q3 = new Quad(quad3, window.getComputedStyle(quad3).getPropertyValue("left"), window.getComputedStyle(quad3).getPropertyValue("top")),
//     q4 = new Quad(quad4, window.getComputedStyle(quad4).getPropertyValue("left"), window.getComputedStyle(quad4).getPropertyValue("top")),
//     q5 = new Quad(quad5, window.getComputedStyle(quad5).getPropertyValue("left"), window.getComputedStyle(quad5).getPropertyValue("top"));

// var quadArr = [q1,q2,q3,q4,q5];

// var html = document.querySelector("html");

// html.addEventListener("mousemove", e =>{
//     thisX = parseInt(e.clientX);
//     thisY = parseInt(e.clientY);

//     quadArr.forEach(function(q){
//         var xcoord=thisX/30 + parseInt(q.xCoor);
//         var ycoord=thisY/30 + parseInt(q.yCoor);
//         q.dom.style.left = xcoord;
//         q.dom.style.top = ycoord;
//     })
// })