// get the paragraph to elements to print the results
var x = document.getElementById("result1");
var y = document.getElementById("result2");

function calc() {
    // store the input values from the user
    var input1 = document.getElementById("input1");
    
    // prase the input to compare the numbers
    input1 = parseInt(input1.value);
    
    // store changes to the input in two variables
    var plus1 = input1 + 1;
    var minus1 = input1 - 1;
    
    // print variables inside elements
    x.innerHTML = ("The number plus 1 is " + plus1);
    y.innerHTML = ("The number minus 1 is " + minus1);
}