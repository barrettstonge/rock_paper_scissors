console.log('Hello world!')

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

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

 

