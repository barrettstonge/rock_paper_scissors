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


/*console.log(getComputerChoice(getRandomInt(3)))*/

let getHumanChoice = window.prompt("Would you like to play rock, paper, scissors? yes/no");
  if (getHumanChoice.toLowerCase() === "yes") { getHumanChoice = prompt("Alright, let\'s play! rock, paper or scissors?(case sensitive)"); (prompt(getComputerChoice(getRandomInt(3))))} 
  
    else if (getHumanChoice === null) {
    getHumanChoice = prompt ("OK, maybe next time.");}
    
    else if (getHumanChoice.toLowerCase() === "") {
    getHumanChoice = prompt("Don't be shy, enter your call! rock, paper or scissors?(case sensitive)");(prompt(getComputerChoice(getRandomInt(3))));}
    
    else if (getHumanChoice === "no"){ getHumanChoice = prompt ("Well that\'s a shame, if you change your mind, hit refresh and we can play.");}

console.log(getHumanChoice)

let score = {
    humanScore: 0, computerScore: 0
};

 



 

