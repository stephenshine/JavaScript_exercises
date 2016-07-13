var btn = document.getElementById("process");
btn.addEventListener("click", func);
var num = document.getElementById("input").value;

function func() {
    var x = document.getElementById("out");
    x.innerHTML = num;
}