//add an event listener to run the check function when btn2 is clicked
document.getElementById("btn2").addEventListener("click", check, false);
window.addEventListener("load", rand);

//create a global variable to keep track of how many guesses are made
var counter = 0;

//function to generate random number between 1 and 100
function rand() {
    answer = parseInt((Math.random() * 100), 10);
    return answer;
}

//function to check answer is valid input
function check() {
    
    //parse the input so it's a number
    guess = parseInt(document.getElementById("guess").value);
    
    //if not a number, give feedback to the user
    if (isNaN(guess)) {            
        document.getElementById("compare").innerHTML = "You must enter a number!";
        } 
    
    //if it's a number, run the test funciton
    else {
        test();
    } 
}

//function to test input against answer
function test(){
    
    //if the input matches the answer, add a guess to the counter and print feedback
    if (guess === answer) {
        counter += 1;
        document.getElementById("compare").innerHTML = "Correct guess";
        document.getElementById("counter").innerHTML = "It took you " + counter + " guesses";
    } 
    
    //if the input is too small, increase counter and give feedback
    else if (guess < answer) {
        counter += 1;
        document.getElementById("compare").innerHTML = "<br>Your guess was too small. Try again";
    } 
    
    //otherwise the number must be too big, so do the same
    else {
        counter += 1;
        document.getElementById("compare").innerHTML = "<br>Your guess was too big. Try again";
    }
}