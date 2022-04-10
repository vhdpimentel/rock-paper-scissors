function displayStartMessage(){
    console.clear();
    console.log("\n\n");
    console.log("To start the game, type rockPaperScissors() below!");
}

function displayInstructions(){
    console.clear();
    console.log("\n\n");
    console.log("It's you against the computer. The game goes up to a best of 5!")
}


function generateChoice() {

    choiceNumber = Math.floor(Math.random() * 3) + 1; // pick random integer between 1 and 3
    
    choice = (choiceNumber === 1)? "rock": // assign corresponding string value
    (choiceNumber === 2)? "paper":
    "scissors";

    return choice;

}

function pickRoundWinner(choiceA, choiceB) { //user and computer choices, in that order
    
    let winner = false; // default

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

function displayRoundResults(userChoice, computerChoice, roundWinner, userVictories, computerVictories) {
    console.log("\n\n");
    console.log("Round results:")
    console.log("You picked " + userChoice);
    console.log("The computer picked " + computerChoice);

    if (roundWinner){
        console.log("The " + roundWinner + " won this round!");
    } else console.log ("This round was a tie!")

    console.log("User victories: " + userVictories);
    console.log("Computer victories: " + computerVictories);
}


function pickFinalWinner(counterA, counterB){ //user and computer victory counters, in that order
    let finalWinner = (counterA > counterB)? "user" :
        (counterB > counterA)? "computer" :
        false;
    
    return finalWinner;
}

function displayFinalWinner(finalWinner){
    console.log("\n\n");
    if(finalWinner){
        console.log("And the final winner was the " + finalWinner + "!!!");
        //alert("And the final winner was: " + finalWinner + "!!!");
    } else console.log("This game was a tie! I guess you quit early, eh?")
}

function rockPaperScissors(){
    displayInstructions();
    let keepPlaying = true; 
    let userChoice;
    while(keepPlaying && (userChoice !== null)){
        console.clear();
        console.log("\n\n")

        let userVictories = 0;
        let computerVictories = 0;

        //goes on for a best of 5
        while(userVictories < 3 && computerVictories < 3 && (userChoice !== null)) {
            //prompt for user's choice: 
            userChoice = prompt("Enter rock, paper or scissors: \n\n");
            console.clear();


            //make the computer's choice:
            let computerChoice = generateChoice();
    
            //choose the round winner:
            let roundWinner = pickRoundWinner(userChoice, computerChoice);

            if (roundWinner === "user") 
                {userVictories++;}
            else if (roundWinner === "computer") 
                {computerVictories++;}
            
            
            //outputs this round's overview
            displayRoundResults(userChoice, computerChoice, roundWinner, userVictories, computerVictories);
    }
        //outputs final winner
        finalWinner = pickFinalWinner(userVictories, computerVictories);
        displayFinalWinner(finalWinner);
    

        //confirm if they wanna play again
        keepPlaying = confirm("Do you wanna play again?");
    }

    displayStartMessage();
}

displayStartMessage();