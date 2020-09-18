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
        green = "#185233", pink = "#ffe5e2", blue = "#26488D", yellow = "#D6AB51", black = "#2E2E2E",
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
                backgroundColorSwitchMethod(pink);
                break;
            case "projects":
                backgroundColorSwitchMethod(blue);
                break;
            case "about":
                backgroundColorSwitchMethod(yellow);
                break;
            case "contact":
                backgroundColorSwitchMethod(black);
                break;
            default:
                localStorage.clear();
                break;
        }
        localStorage.clear();
        setLocalStorage();
    }

    function backgroundColorSwitchMethod(transitionColor){
        color = $("#colorStorage").text();
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
