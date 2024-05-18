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

/*
$(function() {
    $(".first strong").css("color", "red");
});
*/

//ユニバーサルセレクター
//全ての要素を選択できる*で記述する

/*
$(function() {
    $("li *").css("color", "red");
});
*/

//グループセレクター
/*
複数のセレクターを,で区切り並べて指定できる
それぞれのセレクターに対する命令をまとめて記述できる
*/

/*
$(function() {
    $("#first, #third").css("color","red");
});
*/

//css 2.1のセレクター
//子セレクター
/*
特定の要素の直下に配置された要素を選択できる。
子セレクターは親要素と小要素を>(大なり/greater than)で結ぶ
*/
/*
$(function() {
    $("li > strong").css("color", "red");
});
*/

//隣接セレクター
/*特定の要素の次に出現する要素を選択できる。隣接する要素を+で指定する*/
/*
$(function(){
    $("#second + li").css("color", "red");
});
*/

//first-child擬似クラス
/*
特定のセレクターのうち最初に登場する要素を指定するセレクター
セレクターの後ろに:first-childと記述して指定する。
セレクターに含まれる要素の親要素が複数存在する場合それぞれの最初に出現する子要素が選択される
*/
/*
$(function() {
    $("li:first-child").css("color", "red");
});
*/

//css3のセレクター

//間接セレクター
/* 
特定のセレクターの後に出現する要素を選択できる。
セレクターと要素を~(チルダ)で結ぶ
*/
/*
$(function() {
    $("#second ~ li").css("color", "red");
});
*/

///否定擬似セレクター
/*
セレクター内の要素で特定の条件以外の要素を選択できる。
セレクターの後ろに:not(...)を付け、(...)内に除外する条件を記述する
*/
/*
$(function() {
    $("li:not(:first-child)").css("color", "red");
});
*/

//empty擬似クラス
/*
子要素やテキストを含まない要素を選択できる。
セレクターの後ろに:emptyと記述する
*/
/*
$(function() {
    $("li:empty").css("color", "red");
});
*/

//nth-child擬似クラス
/*
セレクターの要素から任意の番号の要素だけを選択できる
セレクターの後ろに:nth-child(番号)と記述する。
番号だけでなく
偶数$("li:nth-child(even)")
奇数$("li:nth-child(odd)")
倍数$("li:nth-child(3n)")
も可能
*/
/*
$(function() {
    $("li:nth-child(3)").css("color", "red");
});
*/

//last-child擬似クラス
/*
特定のセレクターの中で最後の要素を選択できる。
セレクターの後ろに:last-childと記述
*/
/*
$(function() {
    $("li:last-child").css("color", "red");
});
*/

//only-child擬似クラス
/*
セレクターに特定の要素が1つだけ含まれる場合選択できる。
セレクターの後ろに:only-childと記述
*/
/*
$(function() {
    $("li span:only-child").css("color", "red");
});
*/

//nth-last-child擬似クラス
/*
セレクターに指定した要素で後ろから数えて指定した順番にある要素を選択できる
:nth-last-child(番号)と記述
*/
/*
$(function() {
    $("li:nth-last-child(2)").css("color", "red");
});
*/

//nth-of-type擬似クラス
/*
セレクターに指定した要素で、指定した順番にある要素を選択できる。
nth-child擬似クラスと似ているが、nth-child擬似クラスが要素の種類に関係なく
全ての兄弟要素を数えるのに対して、nth-of-type擬似クラスは指定した要素のみを数える
*/
/*
$(function() {
    $("dt:nth-of-type(2)").css("color", "red");
});
*/

//nth-last-of-type擬似クラス
/*
セレクターに指定した要素で、後ろから数えて指定した順番に当たる要素を選択できる
nth-of-type擬似クラスと同様に、指定した要素だけ数える

後ろから数えて2番目のdt要素が赤くなる
*/
/*
$(function() {
    $("dt:nth-last-of-type(2)").css("color", "red");
});
*/

//first-of-type擬似クラス
/*
セレクターに指定した要素で最初に当たる要素を選択できる

最初のddが赤になる
*/
/*
$(function() {
    $("dd:first-of-type").css("color", "red");
});
*/

//last-of-type擬似クラス
/*
セレクターに指定した要素で最後にあたる要素を選択できる
*/
/*
$(function() {
    $("dt:last-of-type").css("color", "red");
});
*/

//only-of-type擬似クラス
/*
セレクターに指定した要素が1つだけ存在する場合にその要素を選択できる
dt要素は1つだけ存在するので赤になる
*/
/*
$(function() {
    $("dt:only-of-type").css("color", "red");
    $("dd:only-of-type").css("color", "blue");
});
*/

//lang擬似クラス
/*
lang属性から要素を選択できる。lang属性はjaと言った具合に言語を指定したり
en-usのように言語と地域を組み合わせて指定できるが、lang擬似クラスは
その両方に対応している
*/
/*
$(function() {
    $(":lang(ja)").css("color", "red");
    $(":lang(en)").css("color", "blue");
    $(":lang(en-us").css("color", "green");
});
*/

//css属性セレクター
//[attribute]
/*
特定の属性を持つ要素を選択できる
*/
/*
$(function() {
    $("[id]").css("color", "red");
});
*/

//[attribute='value']
/*
特定の属性が、特定の値を持つ要素を選択できる
*/
/*
$(function() {
    $("[title='second']").css("color", "red");
});
*/

//[attribute!='value']
/*
特定の属性が、特定の値を持たない要素を選択できるセレクター
このセレクターは要素セレクターの後に続けて記述する必要がある

title属性の値が[first]以外のli要素が赤になる
*/
/*
$(function() {
    $("li[title!='first']").css("color", "red");
});
*/

//[attribute^='value']
/*
特定の属性の値が、特定の文字列で始まっている要素を選択できます

title属性の値がfで始まる要素、つまり1.4番目のli要素が赤色になる
*/
/*
$(function() {
    $("[title^='f']").css("color", "red");
});
*/

//[attribute$='value']
/*
特定の属性の値が、特定の文字列で終わっている要素を選択できる

title属性の値がdで終わっている要素、つまり2.3番目のli要素が赤色になる
*/
/*
$(function() {
    $("[title$='d']").css("color", "red");
});
*/

//[attribute*='value']
/*
特定の属性が特定の文字列を含んでいる要素を指定できる
title属性の値にirを含む要素、1.3番目のli要素が赤になる
*/
/*
$(function() {
    $("[title*='ir']").css("color", "red");
});
*/

//[attributeFilter1][attributeFilter2]
/*
複数の属性セレクターを同時に指定できる

title属性の値がfで始まり、かつtitle属性の値にthが含まれる要素
4番目のli要素が赤になる
*/
/*
$(function() {
    $("[title^='f'][title*='th']").css("color", "red");
});
*/

//jqueryの独自セレクター
//jqueryではcssセレクター以外にも独自のセレクターが利用できる

//firstセレクター/lastセレクター
/*
セレクターの中から最初の要素をfirstセレクター
最後の要素をlastセレクターで指定できる

first-child擬似クラスやlast-child擬似クラスは共通の親要素を持つ要素から
最初・最後の要素を選択するのに対して
last/firstセレクターは指定したセレクターで最初・最後に登場する要素だけを選択できる
*/
/*
$(function() {
    $("li:first").css("color", "red");
    $("li:last").css("color", "red");
});
*/

//evenセレクター/oddセレクター
/*
セレクターの中から偶数番目に出現する要素をevenセレクターで、
奇数番目に出現するセレクターをoddセレクターで指定できる。
ただし、Javascriptでは数字を0から数えるので最初の要素は0
*/
/*
$(function() {
    $("li:even").css("color", "blue");
    $("li:odd").css("color", "red");
});
*/

//epセレクター/ltセレクター/gtセレクター
/*
セレクターの中から特定の順番の要素をep(equal)セレクターで、
特定の要素より前の要素をlt(less than)セレクターで、
後ろの要素をgt(greater than)セレクターで選択できる
要素は登場する順番を数値で指定する。※1番目の要素の場合は0
*/
/*
$(function() {
    $("li:lt(2)").css("color", "red");
    $("li:eq(2)").css("color", "blue");
    $("li:gt(2)").css("color", "green");
});
*/

//headerセレクター
/*
h1~h6までのheading要素をまとめて選択できる
*/
/*
$(function() {
    $(":header").css("color","red");
});
*/

//containsセレクター/hasセレクター
/*
contains特定の文字列が含まれている要素を
hasセレクターは特定のよう嘘が含まれている要素を選択できる
*/

$(function() {
    $("li:contains('サンプル')").css("color", "red");
    $("li:has(strong)").css("color", "red");
});
