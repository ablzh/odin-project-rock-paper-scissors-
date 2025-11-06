// Initialization

// create a variable for counting the current round
let currentRound = 1;
// create a variable to store the total number of rounds (max rounds)
const MAX_ROUND = 10;
// create a variable for the user's score
let userScore = 0;
// create a variable for the computer's score
let computerScore = 0;

// Functions

// create a function for the user's turn
function userMove() {
  let userFigure = "";
  // to get the correct figure, ask again and again
  while (
    userFigure != "rock" &&
    userFigure != "paper" &&
    userFigure != "scissors"
  ) {
    // ask the user via prompt() to pick a figure: rock, paper, or scissors
    userFigure = prompt("Pick a figure. Enter: rock, paper, or scissors");
    // convert the user input to lowercase to make it case-insensitive
    userFigure = userFigure.toLowerCase();
  }
  // return the user input
  return userFigure;
}

// create a function for the computer's turn
function computerMove() {
  const figures = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * figures.length);
  const computerFigure = figures[randomIndex];
  return computerFigure;
}

// create a function getWinner
// compare the return values from the user turn and the computer turn functions
// (the results will be passed as arguments)
function getWinner(userFigure, computerFigure) {
  let winner = "";
  const beats = { rock: "scissors", scissors: "paper", paper: "rock" };
  if (userFigure === computerFigure) winner = "draw";
  else if (beats[userFigure] === computerFigure) winner = "user";
  else winner = "computer";
  // return the winner: "user", "computer", or "draw"}
  return winner;
}

// Game loop
// execute the loop while the current round <= max rounds

while (currentRound <= MAX_ROUND) {
  // create a temporary variable for storing the round winner
  // call getWinner() and pass the results of getUserTurn() and getComputerTurn() as arguments
  // store the round winner for later use
  let roundWinner = getWinner(userMove(), computerMove());

  let whoWonMessage =
    roundWinner === "draw"
      ? "There are no winners - it's a draw!"
      : `The winner of the current round is ${roundWinner}`;

  // use conditional statements to add points to the winner's score
  switch (roundWinner) {
    case "user":
      userScore += 1;
      break;
    case "computer":
      computerScore += 1;
      break;
  }
  // print the current round number
  console.log(`Round: ${currentRound}`);
  // print a message showing who won the current round
  console.log(whoWonMessage);
  // print a message showing both scores (user and computer)
  console.log(`User: ${userScore}, Computer: ${computerScore}`);
  console.log();

  // increase the round count by 1
  currentRound += 1;
}
// After the loop
console.log("The end! Game over.");
// compare the total scores and print a message showing who won the game
// if both scores are equal → print "Draw"
if (userScore === computerScore) console.log("Draw!");
else if (userScore > computerScore) console.log("User won!");
else {
  console.log("Computer won!");
}
