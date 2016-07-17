var x = 1;

do {
    document.getElementById("result").innerHTML += "<li style='list-style:none'>" + x + "</li>";
    x++;
} while(x <= 10);