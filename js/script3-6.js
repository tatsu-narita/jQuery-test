$(function(){
    $("img[src='images/jquery.png']").mouseover(function () { 
        $(this).attr("src","images/jquery_on.png");
    }).mouseout(function () { 
        $(this).attr("src", "images/jquery.png");                                                                                                    
    });

    $("img[src='images/javascript.png']").mouseover(function () { 
        $(this).attr("src", "images/javascript_on.png");
    }).mouseout(function () { 
        $(this).attr("src", "images/javascript.png");
    });
    
});