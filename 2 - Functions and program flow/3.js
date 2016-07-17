function change() {
    x = 10;
    document.getElementById("local").innerHTML = "Local variable: " + x;
}

var x = 15;

document.getElementById("global").innerHTML = "Global variable: " + x;
change();

document.getElementById("after").innerHTML = "Global variable after function call: " + x;