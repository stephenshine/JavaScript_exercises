var store = parseInt(prompt("Type in a number"));
var store2 = parseInt(prompt("Type in another number"));

var x = document.getElementById("out");
if (store > store2) {
    x.innerHTML = store;
} else {
    x.innerHTML = store2;
}