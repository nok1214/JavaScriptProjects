function rpsGame(yourChoice) {
    var humanChoice;
    var botChoice;

    humanChoice = yourChoice.id;
    botChoice = rpsBotChoice(rpsBot());

    results = decideWinner(humanChoice, botChoice);

    message = finalMessage(results);

}

function rpsBot() {
    return Math.floor(Math.random() * 3);
}

function rpsBotChoice(number) {
    return ['rock', 'paper', 'scissors',][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsData = {
        'rock' : {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper' : {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors' : {'paper': 1, 'scissors': 0.5, 'rock': 0},
    }
    var yourScore = rpsData[yourChoice][computerChoice];
    var computerScore = rpsData[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage([yourScore]) {
    if(yourScore === 0) {
        return document.getElementById('rpsResults').innerHTML = 'You Lost!';
    }
    else if(yourScore === 0.5) {
        return document.getElementById('rpsResults').innerHTML = 'You Tied!';
    }
    else {
        return document.getElementById('rpsResults').innerHTML = 'You Won!';
    }
}