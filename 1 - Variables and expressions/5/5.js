// get the paragraph to element to print the result
var x = document.getElementById("result");

function calc() {
    // store the input values from the user
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    
    // prase the input to compare the numbers
    input1 = parseInt(input1.value);
    input2 = parseInt(input2.value);
    var biggest = 0;
    
    // compare the two inputs and assign largest to biggest variable
    if (input1 > input2) {
        biggest = input1;
    } else {
        biggest = input2;
    }
    
    // print out biggest number
    x.innerHTML = "The biggest number is " + biggest;
}