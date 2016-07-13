var x = document.getElementById("result");

function calc() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    input1 = parseInt(input1.value);
    input2 = parseInt(input2.value);
    var result = input1 + input2;
    x.innerHTML = "The sum of the two numbers is " + result;
}