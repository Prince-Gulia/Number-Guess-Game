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

