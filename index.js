const choices = ["rock", "paper", "scissors"];
const playerChoiceDisplay = document.querySelector(".player-info .choice-display");
const computerChoiceDisplay = document.querySelector(".computer-info .choice-display");
const resultDisplay = document.getElementById("resultDisplay");
const buttons = document.querySelectorAll("button");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let playerScoreValue = 0;
let computerScoreValue = 0;


function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice);

    if (playerChoice === computerChoice) {
        resultDisplay.textContent = " ";
        resultDisplay.classList.remove("redText", "greenText");
        resultDisplay.textContent += "It's a tie!";
        resultDisplay.classList.add("yellowText");
    }
    
    else if ((playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")) {
            resultDisplay.textContent = " ";
            resultDisplay.classList.remove("redText", "yellowText");
            resultDisplay.textContent += "You win!"
            resultDisplay.classList.add("greenText");
            playerScoreValue ++;
            playerScore.textContent =  `Score: ${playerScoreValue}`;
    } else {
        resultDisplay.textContent = " ";
        resultDisplay.classList.remove("greenText", "yellowText");
        resultDisplay.textContent += "Computer wins!";
        resultDisplay.classList.add("redText");
        computerScoreValue ++;
        computerScore.textContent =  `Score: ${computerScoreValue}`;
    }

    if (playerChoice === "rock") {
        playerChoiceDisplay.textContent = "🪨";
    } else if (playerChoice === "paper") {  
        playerChoiceDisplay.textContent = "📄";
    } else if (playerChoice === "scissors") {
        playerChoiceDisplay.textContent = "✂️";
    }

    if (computerChoice === "rock") {
        computerChoiceDisplay.textContent = "🪨";
    }   else if (computerChoice === "paper") {
        computerChoiceDisplay.textContent = "📄";
    } else if (computerChoice === "scissors") {
        computerChoiceDisplay.textContent = "✂️";
    }

    if (playerScoreValue === 5) {
        resultDisplay.textContent = " ";
        resultDisplay.classList.remove("redText", "yellowText");
        resultDisplay.classList.add("greenText");
        playerScoreValue = 0;
        computerScoreValue = 0;
        playerScore.textContent =  `Score: ${playerScoreValue}`;
        computerScore.textContent =  `Score: ${computerScoreValue}`;
        window.location.replace("pw.html");

    } else if (computerScoreValue === 5) {
        resultDisplay.textContent = " ";
        resultDisplay.classList.remove("greenText", "yellowText");
        resultDisplay.classList.add("redText");
        playerScoreValue = 0;
        computerScoreValue = 0;
        playerScore.textContent =  `Score: ${playerScoreValue}`;
        computerScore.textContent =  `Score: ${computerScoreValue}`;
        window.location.replace("cw.html");
    }



}