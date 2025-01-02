$(function(){
    $("ul.panel li:not("+$("ul.tab li a.selected").attr("href")+")").hide();
    $("ul.tab li a").click(function(){
        $("ul.tab li a.selected").removeClass("selected");
        $(this).addClass("selected");
        $("ul.panel li").hide();
        $($(this).after("href")).show();
        return false;
    });
});