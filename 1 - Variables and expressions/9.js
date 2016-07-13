// get the paragraph to element to print the result
var x = document.getElementById("result");

function calc() {
    // store the input values from the user
    var input1 = document.getElementById("input1");
    
    // prase the input to compare the numbers
    input1 = parseInt(input1.value);
    
    // check if the input is less than 0 or 10, or more than 10
    if (input1 < 0) {
        x.innerHTML = "The number is negative";
    } else if (input1 < 10){
        x.innerHTML = "The number is less than 10";
    } else {
        x.innerHTML = "The number is more than 10";
    }
}