window.onload = function(){
    var navLogoMain = $(".navLogoMain"),
        navActive = $(".navActive"),
        navHome = $("#navHome"),
        navResume = $("#navResume"),
        navProjects = $("#navProjects"),
        navAbout = $("#navAbout"),
        navContact = $("#navContact"),
        bodyRight = $(".bodyRight"),
        borderStringMain = "",
        color = "";
        green = "#30C58C", purple = "#4230C5", red = "#C53069", yellow = "#B3C530", blue = "#007aec",
        navHTML = localStorage.getItem("navHTML");
        navItemsArr = [navHome, navResume, navProjects, navAbout, navContact];


    //body color transition
    if(localStorage.length == 0){
        setBodyColor(green);
        setLocalStorage();
    }else{
        switch(navHTML.toLowerCase()){
            case "home":
                backgroundColorSwitchMethod(green);
                break;
            case "resume":
                backgroundColorSwitchMethod(purple);
                break;
            case "projects":
                backgroundColorSwitchMethod(red);
                break;
            case "about":
                backgroundColorSwitchMethod(yellow);
                break;
            case "contact":
                backgroundColorSwitchMethod(blue);
                break;
            default:
                localStorage.clear();
                break;
        }
        localStorage.clear();
        setLocalStorage();
    }

    function backgroundColorSwitchMethod(transitionColor){
        color = bodyRight.css("background-color");
        setBodyColor(transitionColor);
        getCorrectBodyColor(color);
    }

    function getCorrectBodyColor(color){
        setTimeout(function(){
            bodyRight.addClass("bodyBGChange");
            bodyRight.css("background-color", color);
        }, 100);
    }

    function setBodyColor(color){
        bodyRight.css("background-color", color);
    }
    
    function setLocalStorage(){
        localStorage.setItem("navHTML", navActive.html());
        navHTML = localStorage.getItem("navHTML");
    }

    //bubbly icons
    setInterval(function(){
        cssBorderRadius(navLogoMain, "logo");
        cssBorderRadius(navActive, "");
    }, 300);
    
    navItemsArr.forEach(function(ele){
        navStyling(ele);
    })

    function navStyling(ele){
        var active = ele.hasClass("navHome");
        if(active) eleInterval(ele);
        ele.mouseenter(function(){
            eleInterval(ele);
        });
        if(!active){
            ele.mouseleave(function(){
                clearInterval(interval);
                resetBorder(ele);
            })
        }
    }

    function eleInterval(ele){
        interval = setInterval(function(){
            cssBorderRadius(ele, "");
        }, 500)
    }

    function resetBorder(ele){
        ele.css("border-radius", "5px")
    }

    function cssBorderRadius(ele, str){
        for(var i=0; i<4; i++){
            borderStringMain+=valueFinder(str) + " ";
        }
        ele.css("border-radius", borderStringMain);
        borderStringMain="";
    }

    function valueFinder(str){
        if(str=="logo"){
            if(rng()) return "40px"
            else return "10px"
        }else{
            if(rng()) return "20px"
            else return "5px"
        }
    }

    function rng(){
        return Math.round(Math.random());
    }
}
