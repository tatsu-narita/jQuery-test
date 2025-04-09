$(function() {
    $("form").submit(function () { 
        //エラーの初期化
        $("p.error").remove();
        $("dl dd").removeClass("error");
    });
});