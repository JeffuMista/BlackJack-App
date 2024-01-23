let firstCard = 9
let secondCard = 10
let isAlive = true
let hasBlackjack = false
let sum = firstCard + secondCard
let messageEl = document.getElementById("message-el")
let message = ""
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard 

    if (sum < 21) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let card = 4
    sum += card
    renderGame()
}