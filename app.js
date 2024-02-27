//create random num generator and set current random num to var
const randomNumber = function(){
    num = Math.floor(Math.random() * 100);
    return num
}
const currRandomNum = randomNumber();
console.log(currRandomNum) //for testing

const guessForm = document.getElementById('guessForm'); //var for form submission
const playerGuesses = document.getElementById("playerGuesses"); //var for player guesses list
numOfGuesses = 0; //counter for final alert 

guessForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the default form sub behavior

    let playerGuess = document.getElementById("input").value; // get input val & set to var

    // create list item for each guess to display
    let li = document.createElement('li');
    li.innerText = playerGuess;
    playerGuesses.appendChild(li);

    // conditional statements for guesses
    if(playerGuess > currRandomNum) {
        numOfGuesses += 1; // add to numOfguess var for final alert 
        alert("Too high, guess again.")
    } else if (playerGuess < currRandomNum){
        numOfGuesses += 1;
        alert("Too low, guess again")
    } else { //if correct answer return alert box based on # of guesses
        numOfGuesses += 1;
        if(numOfGuesses === 1){
            alertMessage = `Phenomenal, it only took you ${numOfGuesses} guess. Maybe you should buy a lotto ticket today! Ready to play again?`
            if(!alert(alertMessage)){window.location.reload()} //once user clicks 'ok' page reloads
        } else if(numOfGuesses <= 5){
            alertMessage =`WOW, it only took you ${numOfGuesses} guesses. Are you some kind of wizard?? Ready to play again?`
            if(!alert(alertMessage)){window.location.reload()}
        } else if(numOfGuesses > 5 && numOfGuesses <= 8){
            alertMessage =`It took you ${numOfGuesses} guesses. Valiant effort human, but me thinks you can do better...ready to try again?`
            if(!alert(alertMessage)){window.location.reload()}
        } else {
            alertMessage = `YIKES it took you ${numOfGuesses} guesses. Thou art like a blindfolded minstrel attempting to hit a note in a storm! Thy guesses dance around the mark like a tipsy jester at a feast! Verily, 'tis a spectacle to behold, albeit a comedic one! Ready to test your wits again?`
            if(!alert(alertMessage)){window.location.reload()}
        }
    }
})

// submit button hover box shadow 
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("mouseenter", (event) => {
    event.target.style.boxShadow = '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)';
})
submitButton.addEventListener("mouseleave", (event) => {
    event.target.style.boxShadow = null;
})


