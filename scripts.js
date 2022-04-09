function generateChoice() {
    choiceNumber = Math.floor(Math.random() * 3) + 1; // pick random integer between 1 and 3
    
    choice = (choiceNumber === 1)? "rock": // assign corresponding string value
    (choiceNumber === 2)? "paper":
    "scissors";

    return choice;
}



function pickWinner(choiceA, choiceB) { //receives user and computer choices, in that order
    let winner = "no one, it was a tie!";
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

function displayWinner(counterA, counterB){ // receives user and computer victory counters, in that order
    let message = (counterA > counterB)? "the user has won!" :
        (counterB > counterA)? "the computer has won!" :
        "nobody wins :("
    
    return message;
}


let keepPlaying = true; 
while(keepPlaying){

    let userVictories = 0;
    let computerVictories = 0;

    //goes on for a best of 5
    while(userVictories < 3 && computerVictories < 3) {
        //prompt for user's choice: 
        let userChoice = prompt("Choose rock, paper or scissors:");
        console.clear();
        console.log("you picked: " + userChoice);

        //make the computer's choice:
        let computerChoice = generateChoice();
        console.log("the computer picked: " +computerChoice);
 

        //choose the round winner:
        let roundWinner = pickWinner(userChoice, computerChoice);

        if (roundWinner === "user") 
            {userVictories++;}
        else if (roundWinner === "computer") 
            {computerVictories++;}
        
        
        //outputs this round's victor
        console.log("The winner of this round was: " + roundWinner);
        console.log("User victories: " + userVictories);
        console.log("Computer victories: " + computerVictories);
}
    //outputs final victory
    winnerMessage = displayWinner(userVictories, computerVictories)
 
    //confirm if they wanna play again
    keepPlaying = confirm("Do you wanna play again?");
}