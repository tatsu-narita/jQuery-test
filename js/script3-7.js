/*
$(function() {
    $("ul.sub").hide();
    $("ul.menu li").hover(function () {
            // over
            $("ul:not(:animated)", this).slideDown("fast");
        },
        function () {
            // out
        $("ul", this).slideUp("fast");
    });
});
*/

$(function() {
    $("ul.menu li").hover(function () {
        // over
        $(">ul:not(:animated)",this).slideDown("fast");
    }, function () {
        // out
        $(">ul", this).slideUp("fast");
    });
});