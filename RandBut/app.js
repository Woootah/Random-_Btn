var noButton = document.querySelector("#b2");
noButton.addEventListener("click", change);

function change(){
    var i = Math.floor(Math.random()* 400) + 1;
    var j = Math.floor(Math.random()* 400) + 1;

    noButton.style.left = i+"px";
    noButton.style.top = j+"px";
}

var yesButton = document.querySelector("#b1");
yesButton.addEventListener("click", changeText);
var text = document.querySelector("#question");
function changeText(){
    text.innerHTML = "I already know it";
}