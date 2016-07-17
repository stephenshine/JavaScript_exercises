// create current date and extract attributes
var date = new Date();
var day = date.getDay();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

// concatinate varibles to print time
var time = hours + ":" + minutes + ":" + seconds;

// use day as the input to switch
switch(day) {
    // once day has been used on switch, store the name of the day in the same variable, and exit the switch
    case(0):
        day = "Sunday";
        break;
    case(1):
        day = "Monday";
        break;
    case(2):
        day = "Tuesday";
        break;
    case(3):
        day = "Wednesday";
        break;
    case(4):
        day = "Thursday";
        break;
    case(5):
        day = "Friday";
        break;
    case(6):
        day = "Saturday";
        break;
}

// select p element from HTML and print day and time
document.getElementById("result").innerHTML = day + " " + time;