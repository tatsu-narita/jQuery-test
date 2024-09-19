
/* sample-1 */
/*
$(function(){
    $("button").click(function() { 
        $("div").show(1000);
        $("div").css("display", "block");
    });
});
*/

/* sample-2 */
// show()にコールバック関数を設定
/*
$(function(){
    $("button").click(function() { 
        $("div").show("show", function() {
            $(this).css("background","blue");
        });
    });
});
*/

/* sample-3 */
// 表示中の要素を非表示にする hide()
/*
$(function(){
    $("button#show").click(function() { 
        $("div").show("slow");
    })
    $("button#hide").click(function () { 
        $("div").hide("slow");
    });
});
*/

/*
$(function(){
    $("button#show").click(function() { 
        $("div:not(:animated)").show("slow");
    });
    $("button#hide").click(function () { 
        $("div:not(animated)").hide("slow");
    });
});
*/

//要素の表示・非表示を交互に切り替える toggle()
/*
$(function(){
    $("button").click(function () { 
        $("div:not(:animated)").toggle("slow");
    });
});
*/

//表示・非表示をスライドで切り替え slideDown()/slideUp()

$(function(){
    $("dt").click(function () { 
        if($("dd").css("display")=="block") {
            $("dd:not(:animated)").slideUp("slow");
        }else{
            $("dd").slideDown("slow");
        }
    });
});