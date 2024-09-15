
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

$(function(){
    $("button").click(function() { 
        $("div").show("show", function() {
            $(this).css("background","blue");
        });
    });
});