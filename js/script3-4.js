/*
$(function(){
    $("ul.panel li:not("+$("ul.tab li a.selected").attr("href")+")").hide();
    $("ul.tab li a").click(function(){
        $("ul.tab li a.selected").removeClass("selected");
        $(this).addClass("selected");
        $("ul.panel li").slideUp("fast");
        $($(this).after("href")).slideDown("fast");
        return false;
    });
});
*/
$(function() {
    $("p.panel").load($("ul.tab li a.selected").attr("href"));
    $("ul.tab li a").click(function () { 
        $("ul.tab li a.selected").removeClass("selected");
        $(this).addClass("selected");
        $("p.panel").load($(this).attr("href"));
        return false;
    });
});