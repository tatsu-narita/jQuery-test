/*
$(function(){
    $("span.tooltip").css({
        opacity:"0.9",
        position:"absolute",
        display:"none"
    });
    $("a").mouseover(function () { 
        $("span.tooltip").fadeIn();
    }).mouseout(function () {
        $("span.tooltip").fadeOut();
    }).mousemove(function (e) { 
        $("span.tooltip").css({
            "top":e.pageY+10+"px",
            "left":e.pageX+10+"px"
        });
    });
});
*/

$(function(){
    $("div.tooltip").css(propertyName);
});