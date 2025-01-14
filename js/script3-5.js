$(function(){
    $("span.tooltip").css({
        opacity:"0.9",
        position:"absolute",
        display:"none"
    });
    $("a").mouseover(function () { 
        $("span.tooltip").fadeIn();
    });
});