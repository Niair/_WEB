console.log("Hello Welcome to my Game!");

const getComputerChoice = () => {
          const choice = ["rock", "paper", "scissors"];
          let CompChoice = choice[Math.floor(Math.random() * choice.length)];
          console.log(CompChoice);
          return CompChoice;
}

const getPlayerChoice = () => {
          let playerChoice = prompt("Please enter your choice between (rock, paper, scissors) : ");
          console.log(playerChoice);
          return playerChoice.toLowerCase();
}
let playerScore = 0;
let computerScore = 0;
const RPS = (playerSelecttion, computerSelection) => {
          let result = "";
          if (playerSelecttion && computerSelection) {
                    if (playerSelecttion === computerSelection) {
                              result = "It's a tie!";
                              console.log(result);
                    }
                    if (playerSelecttion === "rock" && computerSelection === "scissors" 
                              || playerSelecttion === "paper" && computerSelection === "rock"
                              || playerSelecttion === "scissors" && computerSelection === "paper") {
                                        result = "You win!"
                                        console.log(result);
                                        playerScore++;
                    }
                    else {
                              result = "You lose!"
                              console.log(result);
                              computerScore++;
                    }
          }
          console.log(`Player Score: ${playerScore}`);
          console.log(`Computer Score: ${computerScore}`);
}
let playmore = true;
while (playmore) {
          RPS(getPlayerChoice(), getComputerChoice());
          playmore = prompt("Do you want to play again? (yes/no)").toLowerCase();
          if (playmore !== "yes") {
                    playmore = false;
          }
}