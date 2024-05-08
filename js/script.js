// 要素セレクター
/*
$(function() {
    $("li").css("color", "red");
});
*/

// IDセレクター
/*
特定のid属性を持つ要素を対象にします。
id属性に#を付けたものをセレクターとして利用する
*/
/*
$(function() {
    $("#first").css("color", "red");
});
*/

/*
id属性だけでも要素は特定できるが要素名をわかりやすくする為に
要素セレクターとIDセレクターをつなげても指定できる
*/
/*
$(function() {
    $("li#first").css("color", "red");
});
*/

//クラスセレクター
/* 
特定のclass属性を持つ要素に対して命令を実行。
class属性の値に.を付けたものをセレクターとして利用する
*/

/*
$(function() {
    $(".second").css("color", "red");
});
*/

/*
$(function() {
    $("li.second").css("color", "red");
});
*/

//子孫セレクター
/*
複数のセレクターをスペース区切りで指定することにより
特定の要素の内側にある要素を更に絞り込める
*/

$(function() {
    $(".first strong").css("color", "red");
});