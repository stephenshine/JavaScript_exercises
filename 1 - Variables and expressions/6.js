// get the paragraph to element to print the result
var x = document.getElementById("result");

// add event listener to listen for button click
document.getElementById("process").addEventListener("click", calc);

function calc() {
    // store the input values from the user
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    
    // prase the input to compare the numbers
    input1 = parseInt(input1.value);
    input2 = parseInt(input2.value);
    
    // compare the two inputs
    if (input1 === input2) {
        x.innerHTML = "The two numbers are the same";
    } else {
        x.innerHTML = "The two numbers are different";
    }
}