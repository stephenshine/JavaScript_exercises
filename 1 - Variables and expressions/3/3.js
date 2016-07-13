var x = document.getElementById("result");

function calc() {
    var input1 = document.getElementById("input1");
    input1 = parseInt(input1.value);
    x.innerHTML = input1;
}