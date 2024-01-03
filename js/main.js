// make a random number guessing game
const body = document.querySelector("body");

const message = document.querySelector(".message");
const inputBox1 = document.querySelector("#inputBox1");
const playGameBtn = document.querySelector(".playGameBtn");
const level = document.querySelector(".level");

// input 2
const inputBox2 = document.querySelector("#inputBox2");
const guessing = document.querySelector(".guessing");
const message2 = document.querySelector(".message2");

// next btn
const nextBtn = document.querySelector(".nextBtn");
const container = document.querySelector(".container");


let inputOneValue = [];
let chance = 4;
let chanceBack = 0 - 1;

playGameBtn.addEventListener('click' , function() {
    if(
        inputBox1.value != '' &&
       inputBox1.value >= 0 &&
       inputBox1.value <= 10 
    ) {
        inputOneValue = inputBox1.value;
        console.log(inputOneValue);
        message.innerHTML = "Yor number is Correct";
        message.style.color = "green";

        // hide all info input value
        level.style.display = "none";
        message.style.display = "none";
        inputBox1.style.display = "none";
        playGameBtn.style.display = "none";

        //  visible all info input2 value
        level.style.display = "block";
        level.innerHTML = "Level 2";
        message.style.display = "block";
        message.innerHTML = "Your Guessing is start now"
        message.style.fontSize = "30px"
        inputBox2.style.display = "block";
        guessing.style.display = "block";

        
       
    }  else if (isNaN(inputBox1.value)) {
        message.innerHTML = "YOU ARE WRONG !"
        level.style.display = "none";
        message.style.fontSize = "30px"
        message.style.color = "red"

    } else{
        message.innerHTML = "Invalid Credential !";
        message.style.fontSize = "25px"
        message.style.color = "red";
    }
})

// second button
guessing.addEventListener('click' , function() {
    
        
    if(
        inputBox2.value != '' &&
        inputBox2.value >= 0 &&
        inputBox2.value <= 10
    ){
        
        message2.innerHTML = "You guess is Wrong and you have to chances 3";
        message2.style.display = "red";

    if (inputBox1.value === inputBox2.value) {
        message.innerHTML = "Your are win";
        body.style.background = "#0F0424";
        message.style.fontSize = "70px";

        // hide all info input 2
        level.style.display = "none";
        inputBox2.style.display = "none";
        message2.style.display = "none";
        guessing.style.display = "none";

        // visible 
        nextBtn.style.display = "block";

        nextBtn.addEventListener('click' , function() {
            alert("Are you next level")
            container.style.display = "block";

            nextBtn.style.display = "none";
            message.style.display = "none";
        })


    }

    } else if (inputBox2.value === inputBox2.value){
        chance --;
        chanceBack++;
        message2.innerHTML = `You have to input fill Chance ${chanceBack} form ${chance}`;
        message2.style.color = "red";

        if(chance === 0 - 1) {
            alert("Your chance is End ! Please back and Trey Again")
            window.location.reload(chance);
        }
    }
     else {
        chance --;
        chanceBack++;
        message2.innerHTML = `You have to input fill Chance ${chanceBack} form ${chance}`;
        message2.style.color = "red";
    }
})




//******************* */ next level js *************************

// Crate a random number with game 
let randomNumber = parseInt(Math.random() * 50 + 1);

const submit = document.querySelector("#sub");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultPrevious");


const playAgain = document.querySelector(".playAgain");



const p = document.querySelector("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click' , function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    } )
}

function validateGuess(guess) {
    if(isNaN (guess)) {
        alert("please enter a valid number")
    } else if (guess < 1) {
        alert("please enter a number more than 1")
    } else if (guess > 50) {
       alert("please enter a number less than 100")
    } else {
        prevGuess.push(guess)
        if(numGuess === 6) {
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`Your guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO high`);
    }
} 

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    numGuess++; 
    remaining.innerHTML = `${6 - numGuess}`;
} 

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
} 

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled' , '');
    userInput.style.color = "green";
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    p.style.textAlign = "center";
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function endGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click' , function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${6 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

function newGame(){
        const newGameBtn= document.querySelector("#newGame");
        newGameBtn.addEventListener('click' , function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;

    })
}


playAgain.addEventListener('click' , function() {
    if(playAgain) {
        window.location.reload(playAgain);
        body.style.background = "black";
    } else {
        playAgain.style.display = "none";
       
    }
})