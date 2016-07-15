//add event listener to button on page, and run main function on click
document.getElementById("process").addEventListener("click", main, false);

function main() {
    //collect input from 3 input elements
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    var c = document.getElementById("input3").value;

    //call sum function and pass in int of three vaibles
    var sum = calc(parseInt(a), parseInt(b), parseInt(c));
    document.getElementById("result").innerHTML = "The sum of the numbers is " + sum;   
}

function calc(a, b, c) {
    return a + b + c;
}