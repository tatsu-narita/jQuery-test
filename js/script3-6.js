$(function(){
    $("img[src='images/jquery.png']").mouseover(function () { 
        $(this).attr("src","images/jquery._on.png");
    }).mouseout(function () { 
        $(this).attr("src", "images/jquery.png");                                                                                                    
    });
});