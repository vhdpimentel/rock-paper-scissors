function generateChoice() {
    choiceNumber = Math.floor(Math.random() * 3) + 1; // pick random integer between 1 and 3
    
    choice = (choiceNumber === 1)? "rock": // assign corresponding string value
    (choiceNumber === 2)? "paper":
    "scissors";

    return choice;
}



function pickWinner(choiceA, choiceB) {
    let winner = "no one, try again!";
    if(choiceA === "rock"){
        if (choiceB === "paper"){
            winner = "computer";
        }
        if (choiceB === "scissors"){
            winner = "user";
        }
    }
    if (choiceA === "paper"){
        if (choiceB === "rock"){
            winner = "user";
        }
        if (choiceB === "scissors"){
            winner = "computer";
        }
    }
    if (choiceA === "scissors"){
        if (choiceB === "rock"){
            winner = "computer";
        }
        if (choiceB === "paper"){
            winner = "user";
        }
    }
    return winner;
}

function displayWinner(counterA, counterB){
    let message = (counterA > counterB)? "the user has won!" :
        (counterB > counterA)? "the computer has won!" :
        "nobody wins :("
    
    return message;
}
 /*    
    let userVictories = 0;
    let computerVictories = 0;

    //the game will be played for a best of 5
    while(userVictories < 3 && computerVictories < 3) {
        //the user will make his choice: 
        let userChoice = console.prompt("Choose rock, paper or scissors:");

        //the browser will come up with its own choice:
        let computerChoice = generateChoice()
 

        //both will be compared to choose the round winner:
        let roundWinner = pickWinner(userChoice, computerChoice);

        if (roundWinner === "user") {userVictories++;}
        else if (roundWinner === "computer") {computerVictories++;}
        
        
        //this round's victor will be declared
        console.log("the winner of this round was: " + roundWinner);
        console.log("user victories: " + userVictories);
        console.log("computer victories: " + computerVictories);
}
    //final victory will be declared
    winnerMessage = (userVictories === 3)? "the user has won!" :
        (computerVictories === 3)? "the computer has won!" :
        "nobody wins :("
 
    //the user will ble able to choose to play again
        confirm if they wanna play again

 
 all of the inputs and outputs will happen through the
 browser 
    console, initially
*/