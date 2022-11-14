document.querySelector("button").addEventListener("click", rollDice);

function randomDiceRoll() {
    return (Math.floor(Math.random() * 6) + 1);
}

function compareDiceRolls(die1,die2) {
    if (die1 === die2) {
        return 0;
    } else if (die1 > die2) {
        return 1;        
    } else if (die1 < die2) {
        return -1;
    }
}

function hidePlayer1Win() {
    document.getElementById("msg-player1").classList.add("invisible");
    document.getElementById("player1-start").classList.remove("invisible");
    document.getElementById("player1-trophy").classList.add("invisible");
}

function hidePlayer2Win() {
    document.getElementById("msg-player2").classList.add("invisible");
    document.getElementById("player2-start").classList.remove("invisible");
    document.getElementById("player2-trophy").classList.add("invisible");    
}

function revealPlayer1Win() {
    document.getElementById("msg-player1").classList.remove("invisible");
    document.getElementById("player1-trophy").classList.remove("invisible");
    document.getElementById("player1-start").classList.add("invisible");
}

function revealPlayer2Win() {
    document.getElementById("msg-player2").classList.remove("invisible");
    document.getElementById("player2-trophy").classList.remove("invisible");
    document.getElementById("player2-start").classList.add("invisible");
}

function playersDraw() {
    document.getElementById("msg-start").classList.add("invisible");            
    document.getElementById("msg-draw").classList.remove("invisible");
}

function playerWins() {
    document.getElementById("msg-start").classList.add("invisible");
    document.getElementById("msg-draw").classList.add("invisible");
}

function rollDice() {
    var dice1Roll = randomDiceRoll();
    var dice2Roll = randomDiceRoll();

    diceComparison = compareDiceRolls(dice1Roll,dice2Roll);

    document.querySelector("img.dice1").setAttribute("src" , `images/dice${dice1Roll}.png`);
    document.querySelector("img.dice2").setAttribute("src" , `images/dice${dice2Roll}.png`);

    switch (diceComparison) {
        case 0:
            playersDraw();
            hidePlayer1Win();
            hidePlayer2Win();            
            break;
        
        case 1:
            playerWins();
            revealPlayer1Win();
            hidePlayer2Win();            
            break;
    
        case -1:
            playerWins();
            revealPlayer2Win();
            hidePlayer1Win();
            break;

        default:
            break;
    }
}


