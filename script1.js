console.log("Hello world!")
let score = {
    humanScore: 0, computerScore: 0
};
function playGame() {
    const human = getHumanChoice();
    if (!human) return;
    playRound(human);


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    function computerChoice(x) {
        switch (x) {
            case 0: return "rock"
            case 1: return "paper"
            case 2: return "scissors"
            default: return "oops"
        }; { return console.log(x) }
    }

    function getComputerChoice() {
        return computerChoice(getRandomInt(3));
    }


    function getHumanChoice() {
        let firstHumanChoice = prompt("Would you like to play Rock,Paper,Scissors? yes or no");
        let secondHumanChoice;
        debugger;

        firstHumanChoice = firstHumanChoice.toLowerCase();
        if (firstHumanChoice === "yes") {
            debugger;
            secondHumanChoice = prompt("Alright! rock, paper, or scissors?");
            return secondHumanChoice ? secondHumanChoice.toLowerCase() : null;
        } else if (firstHumanChoice === "") {
            firstHumanChoice = window.prompt("Hello?");
            return;
        }
        else if (secondHumanChoice === null) { secondHumanChoice = window.prompt("Hellooooo"); return; }
        else { firstHumanChoice = window.prompt("Are you sure?!?!"); return; }
    }


    function playRound(_humanChoice) {
        debugger;
        const computerSelection = getComputerChoice();
        if (_humanChoice === "rock" && computerSelection === "scissors") { score.humanScore++; return window.alert(`You win! ${_humanChoice} beats ${computerSelection}`); }
        else if (_humanChoice === "paper" && computerSelection === "rock") { score.humanScore++; return window.alert(`You win! ${_humanChoice} beats ${computerSelection}`); }
        else if (_humanChoice === "scissors" && computerSelection === "paper") { score.humanScore++; return window.alert(`You win! ${_humanChoice} beats ${computerSelection}`); }
        else if (_humanChoice === computerSelection) { return window.alert("Tie!"); }
        else if (_humanChoice === null) { return window.alert("You lose!"); }
        else if (_humanChoice === "") { return window.alert("You lose!"); }
        else if (_humanChoice === "no") { return window.alert("You lose!"); }
        else {
            score.computerScore++; return window.alert(`You lose! ${computerSelection} beats ${_humanChoice}`);
        }

    }


}
function fiveRound() {
    for (let i = 0; i < 5; i++) {
        playGame();
    }
    window.alert(`Final score — You: ${score.humanScore}, Computer: ${score.computerScore}`);
}




fiveRound();






