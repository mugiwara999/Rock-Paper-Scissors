
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





let ComputerScore = 0;
let PlayerScore = 0;



let PlayerSelection;
const buttons = document.querySelectorAll('.button');

const container = document.querySelector('body');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {

    let ComputerSelection = getComputerChoice();

    PlayerSelection = button.getAttribute('id');
    console.log(PlayerSelection);
    let winner = PlayRound(ComputerSelection, PlayerSelection);

    if (PlayRound(ComputerSelection, PlayerSelection) === "Player Wins") {


      PlayerScore++;
    }
    else if (PlayRound(ComputerSelection, PlayerSelection) === "Computer Wins") {

      ComputerScore++;
    }

    console.log(ComputerScore, PlayerScore);


    if (PlayerScore + ComputerScore === 5) {


      if (PlayerScore > ComputerScore) {
        // console.log("You Win")
        winner = 'You won';
      }
      else {
        // console.log("Computer Wins")
        winner = 'Computer Won';

      }


    }

    div.textContent = winner;
  })
});

const div = document.createElement('div');

div.classList.add('winner');

container.appendChild(div);
