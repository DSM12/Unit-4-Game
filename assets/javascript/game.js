//Create variable to hold the random number to be guessed
var randomNumber = Math.floor(Math.random() * 101) + 19;
//get that number to appear in html
$("#random-number").html(randomNumber);

//create variable that will hold the random number assigned to crystal
var randomCrystal1 = Math.floor(Math.random() * 12) + 1;
var randomCrystal2 = Math.floor(Math.random() * 12) + 1;
var randomCrystal3 = Math.floor(Math.random() * 12) + 1;
var randomCrystal4 = Math.floor(Math.random() * 12) + 1;

//click crystal, add value to score
var wins = 0;
var losses = 0;
var score = 0;
$("#score").html(score);
$("#wins").html(wins);
$("#losses").html(losses);

function restartGame() {

    randomNumber = Math.floor(Math.random() * 101) + 19;
    $("#randomNumber").text(randomNumber);
    randomCrystal1 = Math.floor(Math.random() * 11) + 1;
    randomCrystal2 = Math.floor(Math.random() * 11) + 1;
    randomCrystal3 = Math.floor(Math.random() * 11) + 1;
    randomCrystal4 = Math.floor(Math.random() * 11) + 1;
    

};

function win() {

    alert("You win!");
    wins++;
    $("#wins").text(wins);
    $("#score").empty();
    $("#random-number").empty();
    restartGame();
}

function lose() {

    alert("You lose!");
    losses++;
    $("#losses").text(losses);
    $("#score").empty();
    $("#random-number").empty();
    restartGame();
};

$('#bluecrystals').on('click', function () {
    score = score + randomCrystal1;
    $('#score').text(score);
    if (score == randomNumber) {
        win();
    }
    else if (score > randomNumber) {
        lose();
    }
});

$('#greencrystals').on('click', function () {
    score = score + randomCrystal2;
    $('#score').text(score);
    if (score == randomNumber) {
        win();
    }
    else if (score > randomNumber) {
        lose();
    }
});

$('#redcrystals').on('click', function () {
    score = score + randomCrystal3;
    $('#score').text(score);
    if (score == randomNumber) {
        win();
    }
    else if (score > randomNumber) {
        lose();
    }
});

$('#yellowcrystals').on('click', function () {
    score = score + randomCrystal4;
    $('#score').text(score);
    if (score == randomNumber) {
        win();
    }
    else if (score > randomNumber) {
        lose();
    }
});