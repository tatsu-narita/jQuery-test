
$(function(){
    $("a.open").click(function (e) { 
        $("#floatWindow").fadeIn("fast");
        return false;
    });

    $("#floatWindow a.close").click(function () { 
        $("#floatWindow").fadeOut("fast");
        return false;
    });

    $("#floatWindow dl dt").mousedown(function (e) { 
        $("#floatWindow")
        .data("clickPointX", e.pageX - $("#floatWindow").offset().left)
        .date("clickPointY", e.pageY - $("#floatWindow").offset().top);

        $(document).mousemove(function (e) { 
            $("#floatWindow").css({
                
            });
        });
    });
});