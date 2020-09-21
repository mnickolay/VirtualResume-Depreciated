var bodyRight = $(".bodyRight"),
    linkedin = $("#hoverClickLI"),
    linkedinBG = $("#linkedinBG"),
    email = $("#hoverClickE"),
    emailBG = $("#emailBG"),
    github = $("#hoverClickGH"),
    githubBG = $("#githubBG"),
    phone = $("#hoverClickP"),
    phoneBG = $("#phoneBG"),
    BGArr = [linkedinBG, emailBG, githubBG, phoneBG]
    colors = {
        blue: "#0077B5",
        red: "#e83446",
        black: "#000000",
        green: "#00a946",
        white: "#FFFFFF"
    }

linkedin.on("click", function(){
    clearBG();
    bodyRight.css("backgroundColor", colors.blue);
    linkedinBG.css("backgroundColor", colors.blue);
});

email.on("click", function(){
    clearBG();
    bodyRight.css("backgroundColor", colors.red);
    emailBG.css("backgroundColor", colors.red);
});

github.on("click", function(){
    clearBG();
    bodyRight.css("backgroundColor", colors.black);
    githubBG.css("backgroundColor", colors.black);
});

phone.on("click", function(){
    clearBG();
    bodyRight.css("backgroundColor", colors.green);
    phoneBG.css("backgroundColor", colors.green);
});

function clearBG(){
    BGArr.forEach(function(bg){
        bg.css("backgroundColor", colors.white)
    });
}