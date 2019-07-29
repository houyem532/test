// document.getElementById(b).addEventListener(click,f1);
// function f1 ()
// {
//     var a = documet.getElementById(texte);
//     a.style.

// }
function bold() {
    document.getElementById("texte").style.fontWeight = "bold";
}
function italic() {
    document.getElementById("texte").style.fontStyle = "italic";
}
function underline() {
    document.getElementById("texte").style.textDecoration = "underline";

}
function Size() {
    document.getElementById("texte").style.fontSize = document.getElementById("s").value;


}
function family() {
    document.getElementById("texte").style.fontFamily = document.getElementById("k").value;


}

setInterval(function () {
    document.getElementById("ch").innerHTML = "changer";


}, 4000)

$(".ex1").css("display : none ");
$(document).ready(function () {
    $(".test").hide();
    $(".abs").mouseenter(function () {
        $(this).css("opacity", "0.5" );
        $(this).find("button").show();
       
    });
    $(".abs").mouseleave(function () {
        $(this).find("button").hide();
        $(this).css("opacity","1" );
    });


});





