// function to take three inputs and print to DOM
function func(a, b, c) {
    var result = a + b + c;
    document.getElementById("result").innerHTML = "The sum of the three inputs is " + result;
}

// store the input values from the user
var a = document.getElementById("input1");
var b = document.getElementById("input2");
var c = document.getElementById("input3");
    
// prase the input to compare the numbers
a = parseInt(a.value);
b = parseInt(b.value);
c = parseInt(c.value);

// add event listener for click on button
document.getElementById("process").addEventListener("click", function(){
    func(a, b, c);
});