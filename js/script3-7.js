$(function() {
    $("ul.sub").hide();
    $("ul.menu li").hover(function () {
            // over
            $("ul.not(:animated)", this).slideDown("fast");
        }, function () {
            // out
            
        }
    );
});