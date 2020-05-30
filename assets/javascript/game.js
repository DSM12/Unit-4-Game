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

    function win() {

        alert("You win!");
        wins++;
        $("#wins").text(wins);
        reset1();
    }
    
    function lose() {
    
        alert("You lose!");
        losses++;
        $("#losses").text(losses);
        reset1();
        reset2();
    } 

    function reset() {
        score = 0;
        $("#score").text(score);

    }
    function reset2() {
        randomNumber = Math.floor(Math.random() * (101 + 1) + 19);
        $("#random-number").html(randomNumber)
        crystals1 = Math.floor(Math.random() * 12) + 1;
        crystals2 = Math.floor(Math.random() * 12) + 1;
        crystals3 = Math.floor(Math.random() * 12) + 1;
        crystals4 = Math.floor(Math.random() * 12) + 1;
    };