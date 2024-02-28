let random = Math.floor(Math.random() * 3);
function computerChoice(random) {
    if (random == 0) { return "rock" };
    if (random == 1) { return "paper" };
    if (random == 2) { return "scissors" };
}
console.log(random);
let computerSelection = computerChoice(random);
function playRound(userChoice, computerSelection) {
    if (computerSelection === "rock") {
        if (userChoice === "rock") return "its a tie";
        if (userChoice === "paper") return "you win, paper beats rock";
        if (userChoice === "scissors") return "you lose, rock beats scissors";
    };
    if (computerSelection === "paper") {
        if (userChoice === "paper") return "its a tie";
        if (userChoice === "rock") return "you lose, paper beats rock";
        if (userChoice === "scissors") return "you win, scissors beats paper";
    };
    if (computerSelection === "scissors") {
        if (userChoice === "scissors") return "its a tie";
        if (userChoice === "rock") return "you win, rock beats scissors";
        if (userChoice === "paper") return "you lose, scissors beats paper";
    };
};
function userInput() {
    let choiceTemp = prompt("enter choice rock paper scissors");
    let userChoice = choiceTemp.toLowerCase();
    return userChoice;
}
function playGame() {
    let computerPoints = 0;
    let userPoints = 0;
    for (i = 0; i < 5; i++) {
        let userChoice = userInput();
        let score = playRound(userChoice, computerSelection);
        console.log(score);
        if (score.includes("win")) { userPoints++ };
        if (score.includes("lose")) { computerPoints++ };
        console.log(computerPoints);
    }
    if (computerPoints < userPoints) console.log(" you r the winner");
    if (computerPoints > userPoints) console.log("u r the loser");
    if (computerPoints = userPoints) console.log("no one loses");
    return;
}
playGame();