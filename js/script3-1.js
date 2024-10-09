
/*
$(function(){
    $("th:nth-child(odd)").addClass("odd");
    $("tr:nth-child(even)").addClass("even");
});
*/

$("tr:not(:first-child)").mouseover(function () { 
    $(this).addClass("hover");
}).mouseout(function () { 
    $(this).removeClass("hover");
});