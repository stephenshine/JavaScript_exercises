for (var i = 0; i < 5; i++) {
    for (var j = 1; j <= 10; j++) {
        var result = j + (i * 10);
        document.getElementById("result").innerHTML += "<li style='list-style:none'>" + result + "</li>";
    }
    document.getElementById("result").innerHTML += "<br>";
}