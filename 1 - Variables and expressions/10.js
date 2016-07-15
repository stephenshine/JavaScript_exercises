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
    
    // check if both inputs are greater than 10
    if (input1 > 10 && input2 > 10) {
        x.innerHTML = "Both numbers are greater than 10";
    } 
    // check if one of the numbers is greater than 10
    else if(input1 > 10 || input2 > 10) {
        x.innerHTML = "One of the numbers is greater than 10";
    }
    else {
        x.innerHTML = "Neither of the numbers is greater than 10";
    }
}