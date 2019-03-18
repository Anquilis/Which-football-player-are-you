$(".messi, .ronaldo, .neymar, .mbappe, .error").hide();

$("#submit").click(function(){
    var age= $("#age").val();
    var teamPlayer= $("#teamPlayer").val();
    if (age >=30 && teamPlayer === "yes") {
        $(".ronaldo, .neymar, .mbappe, .error").hide();
        $(".messi").fadeIn();
        $("body").css("background-image","linear-gradient(to right, #004D98 , #DB0030 , #004D98)");
    } else if (age >=30 && teamPlayer === "no") {
        $(".messi, .neymar, .mbappe, .error").hide();
        $(".ronaldo").fadeIn();
        $("body").css("background-image","linear-gradient(to right, white,black)");
    } else if (age <30 && teamPlayer === "yes") {
        $(".ronaldo, .neymar, .messi, .error").hide();
        $(".mbappe").fadeIn();
        $("body").css("background-image","linear-gradient(to right, #004170, #DA291C ,#004170)");
    } else if (age <30 && teamPlayer === "no") {
        $(".ronaldo, .messi, .mbappe, .error").hide();
        $(".neymar").fadeIn();
        $("body").css("background-image","linear-gradient(to right, #004170, #DA291C,#004170)");
    } else {
        $(".error").show();
        $(".messi, .ronaldo, .neymar, .mbappe").hide();
        $("body").css("background-image","linear-gradient(to right, white");
    }
});