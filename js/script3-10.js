$(function() {
    $("form").submit(function () { 
        //エラーの初期化
        $("p.error").remove();
        $("dl dd").removeClass("error");
        $("input[type='text'].validate, textarea.validate").each(function () { 
            //必須項目チェック
        });
    });
});