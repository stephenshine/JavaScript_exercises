var store = parseInt(prompt("Type in a number"));
var less = store - 1;
var more = store + 1;

var x = document.getElementById("out");
var y = document.getElementById("out2");

x.innerHTML = "One more than your number is " + more;
y.innerHTML = "One less than you number is " + less;