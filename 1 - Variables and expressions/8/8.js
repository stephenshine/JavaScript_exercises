var a = parseInt(prompt("Type in a number"));
var b = parseInt(prompt("Type in another number"));
var c = parseInt(prompt("Type in a third number"));

var sum1 = (a + b) * c;
var sum2 = a + b + c;
var diff = sum1 - sum2;

var x = document.getElementById("out");

x.innerHTML = "The difference between the two sums is " + diff;