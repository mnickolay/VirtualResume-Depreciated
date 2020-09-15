var circles = document.querySelectorAll("circle");

circles.forEach(circle => {
    setCircleAttributes(circle);
});

function setCircleAttributes(circle){
    circle.setAttribute("cx", rngCircleXandY());
    circle.setAttribute("cy", rngCircleXandY());
    circle.setAttribute("r", rngCircleRadius());
}

function rngCircleXandY(){
    return Math.floor((Math.random() * 1000))
}

function rngCircleRadius(){
    return Math.floor((Math.random() * 110) + 10)
}