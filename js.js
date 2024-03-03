let rounds = 0;
let computerPoints = 0;
let userPoints = 0;
function computerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0) { return "rock" };
    if (random == 1) { return "paper" };
    if (random == 2) { return "scissors" };
}
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
function userInput(id) {
    let choiceTemp = prompt("enter choice rock paper scissors");
    let userChoice = choiceTemp.toLowerCase();
    return userChoice;
}
function playGame(id) {
    let computerSelection = computerChoice();
    let userChoice = id;
    let score = playRound(userChoice, computerSelection);
    console.log(score);
    h3.innerText = score;
    div.appendChild(h3);
    if (score.includes("win")) { userPoints++ };
    if (score.includes("lose")) { computerPoints++ };
    h1.textContent = "";
    rounds++;
    if (rounds == 5) {
        if (computerPoints < userPoints) h1.textContent = " you r the winner";
        if (computerPoints > userPoints) h1.textContent = "u r the loser";
        if (computerPoints == userPoints) h1.textContent = "no one loses";
        if (computerPoints < userPoints) console.log(" you r the winner");
        if (computerPoints > userPoints) console.log("u r the loser");
        if (computerPoints == userPoints) console.log("no one loses");
        div.appendChild(h1);
        computerPoints = 0;
        userPoints = 0;
        rounds = 0;
    }
    return;
}


/// get ui inputs
let rockSel = document.querySelector('#rock');
let paperSel = document.querySelector('#paper');
let scissorsSel = document.querySelector('#scissors');
let div = document.querySelector('#result');
let h3 = document.createElement('h3');
let h1 = document.createElement('h1');

rockSel.addEventListener('click', (e) => { playGame(e.target.id) });
paperSel.addEventListener('click', (e) => { playGame(e.target.id) });
scissorsSel.addEventListener('click', (e) => { playGame(e.target.id) });




