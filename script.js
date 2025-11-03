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
// create a temporary variable for a random number between 0 and 1
// use conditional cases to decide the computer's choice
// if random number < 1/3 → rock
// if random number < 2/3 → paper
// otherwise → scissors
// return the computer's choice

// create a function getWinner
// compare the return values from the user turn and the computer turn functions
// (the results will be passed as arguments)
// return the winner: "user", "computer", or "draw"

// Game loop

// execute the loop while the current round <= max rounds
// create a temporary variable for storing the round winner
// call getWinner() and pass the results of getUserTurn() and getComputerTurn() as arguments
// store the round winner for later use

// use conditional statements to add points to the winner's score
// print a message showing who won the current round
// print a message showing both scores (user and computer)
// print the current round number

// increase the round count by 1

// After the loop

// compare the total scores and print a message showing who won the game
// if both scores are equal → print "Draw"
