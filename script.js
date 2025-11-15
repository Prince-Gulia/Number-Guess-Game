let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const guessRemaining = document.querySelector(".Remaining")
const lowOrHigh = document.querySelector(".lowOrHigh")
const startOver = document.querySelector(".resultParas")
const p = document.createElement('p')

let previous = [] 
let numberOfGuessesLeft = 1
let flag = true

if ( flag ){
    submit.addEventListener( 'click' , ( e ) => {
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
})
}

function validateGuess (guess){
    // To check if the guess is in range and valid or not
    if (isNaN(guess)){
        alert ("Please Enter a Number!!")
    } else if (guess < 1){
        alert ("Please enter a Number that is greater than 1")
    } else if (guess > 100) {
        alert ("Please enter a number that is smaller than 100")
    } else {
        previous.push(guess)
        if ( numberOfGuessesLeft === 11 ){
            displayDetails(guess)
            displayMessage(`Game Over, The Correct Number was => ${randomNumber}`)
            endGame()
        } else {
            displayDetails(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess (guess){
    //To check if guess is correct, high or low

    if ( guess === randomNumber ) {
        displayMessage(`Correct!!`)
        endGame()
    } else if ( guess < randomNumber ) {
        displayMessage(`Your Guessed Number is low`)
    } else if (guess > randomNumber) {
        displayMessage(`Your Guessed number is high`)
    }
}

function displayMessage(message){
    //To display the message if the guess is right, wrong or correct

    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function displayDetails (guess){
    //To display the details like previous guesses, remaining guesses and all

    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numberOfGuessesLeft++ ;
    guessRemaining.innerHTML = `${11 - numberOfGuessesLeft}`
}

function endGame (){
    // To end the game if user wants 

    userInput.value = ''
    userInput.setAttribute('disabled',true)
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`
    startOver.appendChild(p)
    flag = false
    newGame()
}

function newGame(){
    // To start a new game if user wants to play again (A new button to restart again maybe if all guesses lost or if user wants)

    const newStart = document.getElementById('newGame')
    newStart.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1)
        previous = []
        numberOfGuessesLeft = 1
        guessSlot.innerHTML = ''
        guessRemaining.innerHTML = `${11 - numberOfGuessesLeft}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        flag = true
    } )
}