// insert rock paper or scissors
// computer will decide rock paper or scissors 
// computer output will be rock paper or scissors
//if user is rock and computer is scissors then user wins
// if user is rock and computer is paper then computer wins
// if user is paper and computer is rock then user wins
// if user is paper and computer is scissors then computer wins
// if user is scissors and computer is rock then computer wins
// if user is scissors and computer is paper then user wins
// if user and computer is the same then it is a tie

//array of choices for computer to select
const moves = ["rock","paper","scissors"];


//plays 5 iterations
function game() {
    for (let i = 0; i < 5; i++) {
        //computer randomly selects move
        function getComputerchoice() {
            let computerSelection= moves[Math.floor(Math.random() * moves.length)];
            return computerSelection;
        }
        let computerSelection = getComputerchoice();
        console.log(computerSelection);

        //user inputs choice
        let input = prompt("Rock, paper, scissors?");
        let playerSelection = input.toLowerCase();
        console.log(playerSelection);

        //compares playerSelection to computerSelection
        function playRound(playerSelection,computerSelection) {
            if (computerSelection == playerSelection) {
                return "It's a tie!"
            } else if (computerSelection =="rock" && playerSelection =="scissors"|| computerSelection =="paper" && playerSelection =="rock" || computerSelection =="scissors" && playerSelection =="paper") {
                return "Computer wins!"
            } else if (computerSelection =="scissors" && playerSelection =="rock"|| computerSelection =="rock" && playerSelection =="paper" || computerSelection =="paper" && playerSelection =="scissors") {
                return "Player wins!"
            }
        }
        playRound();
        console.log(playRound(playerSelection, computerSelection));
            
    

    }
}
game()