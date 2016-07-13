// get the paragraph to element to print the result
var x = document.getElementById("result");

function calc() {
    // store the input values from the user
    var a = document.getElementById("input1");
    var b = document.getElementById("input2");
    var c = document.getElementById("input3");
    
    // prase the input to compare the numbers
    a = parseInt(a.value);
    b = parseInt(b.value);
    c = parseInt(c.value);

    // calculate the two sums and the difference
    var sum1 = (a + b) * c;
    var sum2 = a + b + c;
    var difference = sum1 - sum2;
    
    // print out both sums and the difference
    x.innerHTML = "(a + b) * c = " + sum1 +
               "<br> a + b + c = " + sum2 +
               "<br> the difference is " + difference;

}