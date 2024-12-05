
/*
$(function(){
    $("dd:not(:first)").css("display", "none");
    $("dl dt").click(function () { 
        if($("+dd", this).css("display")==="none"){
            $("dd").slideUp("slow");
            $("+dd", this).slideDown("slow");
        }
    });
});
*/


$(function(){
    $("dd:not(:first)").css("display","none");
    $("dt:first").addClass("selected");
    $("dl dt").click(function () { 
        if($("+dd", this).css("display")=="none"){
            $("dd").slideUp("slow");
            $("+dd", this).slideDown("slow");
            $("dt.selected").removeClass("selected");
            $(this).addClass("selected");
        }
    });
});
