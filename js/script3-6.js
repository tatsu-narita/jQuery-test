/*
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

    $("img[src='images/css.png']").mouseover(function () { 
        $(this).attr("src", "images/css_on.png");
    }).mouseout(function () { 
        $(this).attr("src", "images/css.png");
    });

    $("img[src='images/html.png']").mouseover(function () { 
        $(this).attr("src", "images/html_on.png");
    }).mouseout(function () { 
        $(this).attr("src", "images/html.png");
    });
});
*/

$(function() {
    $("img.rollover").mouseover(function () { 
        $(this).attr("src", $(this).attr("src").replaceAll(/^(.+)(¥.[a-z]+)$/,"$1_on$2"));
    }).mouseout(function () { 
        $(this).attr("src", $(this).attr("src").replaceAll(/^(.+)(¥.[a-z]+)$/,"$1$2"));
    });
});