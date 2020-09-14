window.onload = function(){
    var navLogoMain = $(".navLogoMain"),
        navActive = $(".navActive"),
        navHome = $("#navHome"),
        navResume = $("#navResume"),
        navProjects = $("#navProjects"),
        navAbout = $("#navAbout"),
        navContact = $("#navContact"),
        borderStringMain = "",
        navItemsArr = [navHome, navResume, navProjects, navAbout, navContact];

    navItemsArr.forEach(function(ele){
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
    })

    function eleInterval(ele){
        interval = setInterval(function(){
            cssBorderRadius(ele, "");
        }, 500)
    }

    function resetBorder(ele){
        ele.css("border-radius", "5px")
    }

    setInterval(function(){
        cssBorderRadius(navLogoMain, "logo");
        cssBorderRadius(navActive, "");
    }, 300);

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

    function findColor(){
        var color = rngColor();
        if(color==1) return ""
    }

    function rngColor(){
        return Math.floor((Math.random()*3)+1)
    }
}
