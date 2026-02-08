console.log('Hello world! Let\'s play a game!')

function getRandomInt(max) {
  return Math.floor(Math.random() * max);}

function getComputerChoice(x){
    switch (x) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
        default:
            return "oops"
    }
}


console.log(getComputerChoice(getRandomInt(3)))

let sign = window.prompt("Would you like to play rock, paper, scissors? yes/no");
  if (sign.toLowerCase() === "yes") { sign = prompt("Alright, let\'s play! rock, paper or scissors?(case sensitive)");} 
  
    else if (sign === null) {
    sign = prompt ("OK, maybe next time.");}
    
    else if (sign.toLowerCase() === "") {
    sign = prompt("Don't be shy, enter your call!");}
    
    else if (sign === "no")( sign = prompt ("Well that\'s a shame, if you change your mind, hit refresh and we can play."))


 

