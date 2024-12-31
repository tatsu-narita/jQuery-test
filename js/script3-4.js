$(function(){
    $("ul.panel li:not("+$("ul.tab li a.selected").attr("href")+")").hidde();
    $("ul.tab li a").Click(function(){
        $("ul.tab li a.selected").removeClass("selected");
        
    });
});