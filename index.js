let cards = [];
let isAlive = false;
let hasBlackjack = false;
let sum = 0;
const messageEl = document.getElementById("message-el");
let message = "";
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
let player = {
    name: "Jeffumista",
    chips: 1000
};
const startGame = document.getElementById("start-game");
const newCard = document.getElementById("new-card");
const playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
const playerName = document.getElementById("player-name");

function getRandomCard(){
    randomNumber = Math.floor(Math.random() * 13 + 1)
    if (randomNumber >= 10){
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
startGame.addEventListener("click", function() {
    if (isAlive === false || hasBlackjack === true) {
    isAlive = true;
    hasBlackjack = false;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()
    }
});

newCard.addEventListener("click", function(){
    if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
});

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw another card?"
        isAlive = true
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
};


