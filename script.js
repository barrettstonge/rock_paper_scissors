console.log('Hello world! Let\'s play a game!')

function getRandomInt(max) {
  return Math.floor(Math.random() * max);}

function getComputerChoice(x){
    switch (x) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
        default:
            return "oops"
    }
}
console.log(getComputerChoice());

let getHumanChoice = function(y) {prompt("rock, paper, or scissors?");}

console.log(getHumanChoice)
 

  ///////////////////* approach rewriting logic for playRound function using getComputerChoice structure with case scenarios depending on player and computer choice, should be up to 9 scenarios total. */////////////

/*function getHumanChoice(y) {return prompt("Would you like to play rock, paper, scissors? yes/no");}

  if (getHumanChoice === "yes") {prompt("Alright, let\'s play! rock, paper or scissors?");}  
  
    else if (getHumanChoice === null) {
    getHumanChoice = prompt ("OK, maybe next time.");}
    
    else if (getHumanChoice === "no"){ getHumanChoice = prompt ("Well that\'s a shame, if you change your mind, hit refresh and we can play.");}


    else if (getHumanChoice === "") {getHumanChoice = prompt("Don't be shy, enter your call! rock, paper or scissors?");}*/

    



let score = {
    humanScore: 0, computerScore: 0
}

function playRound(humanChoice, computerChoice) {
    
    if (humanSelection === computerSelection) {alert("It's a tie!");}
    else if (humanSelection === "rock", computerSelection === "scissors"){alert("You win!");}
    else if (humanSelection ===  "paper", computerSelection === "rock"){alert("You win!");}
    else if (humanSelection ===  "scissors" , computerSelection === "paper"){alert("You win!");}
     else {alert("You lose!");}

  

}



/*playRound(humanSelection, computerSelection);

console.log(playRound)*/



/*function playRound(x,y){
    if (x === "rock", y === "rock")
            {prompt("Tie!!");}
        else if (x ==="rock",y === "scissors")
            {prompt("You lose! Scissors beats rock.");}
        else if (x ==="rock",y === "paper")
            {prompt("You win! Paper beats rock.");}
        else if (x ==="paper", y ==="rock")
            {prompt("You lose!, Paper beats rock.");}
        else if (x ==="paper", y ==="paper")
            {prompt("Tie!");}
        else if (x ==="paper",y ==="scissors")
            {prompt("You win! Scissors beats paper");}
        else if (x ==="scissors", y ==="rock")
            {prompt("You win! Rock beate scissors.");}
        else if (x ==="scissors",y ==="paper")
            {prompt("You lose! Scissors beats paper.");}
        else if (x ==="scissors", y ==="scissors")
            {prompt("Tie!");}}*/
    
    
      


/*function playRound (getHumanChoice, getComputerChoice) { 
        return (console.log(humanSelection, computerSelection));
         if (humanSelection.compareToIgnoreCase(computerSelection) > 0 ){console.log("You win!")};
         if (computerSelection.compareToIgnoreCase(humanSelection) > 0 ) {console.log("You lose!")};

   
  
;       const humanSelection = getHumanChoice.toLowerCase(); 
         const computerSelection = getComputerChoice;
       let a = "rock";
        let b = "paper";
         let c = "scissors";

        if (b.compareToIgnoreCase(a) > 0){
            console.log("Paper beats rock!")
        };
        if (c.compareToIgnoreCase(b) ){
            console.log("Scissors beats paper!")
        };
        if (a.compareToIgnoreCase(c) > 0){
            console.log("Rock beats scissors" )
        };
}
    
 console.log(playRound)*/

/* Keep asking until they say "yes"
let play = "";
while (play.toLowerCase() !== "yes") {
  if (play === "") {
    play = prompt("Would you like to play?");
  } else {
    play = prompt("Oh okay, are you sure you wouldn't like to play?");
  }
}

// Start Program
const choices = ["rock", "paper", "scissors"];
const userChoice = prompt("rock, paper, or scissors?").toLowerCase();
const compChoice = choices[Math.floor(Math.random() * choices.length)];

alert("Computer chose: " + compChoice);

if (userChoice === compChoice) {
  alert("It's a tie!");
} else if (
  (userChoice === "rock" && compChoice === "scissors") ||
  (userChoice === "paper" && compChoice === "rock") ||
  (userChoice === "scissors" && compChoice === "paper")
) {
  alert("You win!");
} else {
  alert("You lose!");
}*/

 



 

