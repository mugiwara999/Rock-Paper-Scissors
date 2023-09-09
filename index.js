
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {

  let choice = Math.floor(Math.random() * 3);

  return choices[choice];
}



function PlayRound(ComputerSelection, PlayerSelection) {

  if (ComputerSelection === PlayerSelection) {
    return "Tie"
  }

  if (PlayerSelection === "rock") {
    if (ComputerSelection === "paper") {
      return "Computer Wins"
    }

    return "Player Wins"
  }

  if (PlayerSelection === "paper") {
    if (ComputerSelection === "scissors") {
      return "Computer Wins"
    }

    return "Player Wins"
  }

  if (PlayerSelection === "scissors") {
    if (ComputerSelection === "rock") {
      return "Computer Wins"
    }

    return "Player Wins"
  }



}


let PlayerSelection = prompt('your choice').toLowerCase();

let ComputerSelection = getComputerChoice();

console.log(PlayRound(ComputerSelection, PlayerSelection));


let ComputerScore = 0;
let PlayerScore = 0;




while (ComputerScore + PlayerScore < 5) {

  let PlayerSelection = prompt('your choice').toLowerCase();

  let ComputerSelection = getComputerChoice();

  console.log(PlayRound(ComputerSelection, PlayerSelection));

  if (PlayRound(ComputerSelection, PlayerSelection) === "Player Wins") {


    PlayerScore++;
    console.log("PlayerScore", PlayerScore)
  } else if (PlayRound(ComputerSelection, PlayerSelection) === "Computer Wins") {

    ComputerScore++;
    console.log("ComputerScore", ComputerScore)
  }

}


if (PlayerScore > ComputerScore) {
  console.log("You Win")
}
else {
  console.log("Computer Wins")
}

console.log(`You got ${PlayerScore} and computer score is ${ComputerScore}`)
