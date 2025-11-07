let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const guessRemaining = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHigh")
const startOver = document.querySelector(".resultParas")
const p = document.createElement('p')

let previous = [] 
let numberOfGuessesLeft = 1
let flag = true

submit.addEventListener( 'click' , ( e ) => {
    e.preventDefault()
})

function validateGuess (guess){
    // To check if the guess is in range and valid or not
}

function checkGuess (guess){
    //To check if guess is correct, high or low
}

function displayMessage(message){
    //To display the message if the guess is right, wrong or correct
}

function displayDetails (guess){
    //To display the details like previous guesses, remaining guesses and all
}

function endGame (){
    // To end the game if user wants 
}

function newGame(){
    // To start a new game if user wants to play again (A new button to restart again maybe if all guesses lost or if user wants)
}