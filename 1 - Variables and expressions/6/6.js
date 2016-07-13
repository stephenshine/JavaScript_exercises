var store = parseInt(prompt("Type in a number"));
var store2 = parseInt(prompt("Type in another number"));

var same = "You typed the same number twice";
var diff = "You typed two different numbers";

var x = document.getElementById("out");
if (store == store2) {
    x.innerHTML = same;
} else {
    x.innerHTML = diff;
}