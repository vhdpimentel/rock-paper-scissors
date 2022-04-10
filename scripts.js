//prints instructions on the browser console about how to start the game
function displayStartMessage(){
    console.clear();
    console.log("\n\n");
    console.log("To start the game, type rockPaperScissors() below!");
}

//prints an instruction message on the browser console about how the game will happen
function displayInstructions(){
    console.clear();
    console.log("\n\n");
    console.log("It's you against the computer. The game goes up to a best of 5!")
}

//return either "rock", "paper", "scissors" or null
function getUserChoice() {
    validChoice = false;
    let userChoice = prompt("Enter rock, paper or scissors: \n\n");
    if(userChoice) {userChoice = userChoice.toLowerCase();}

    while (!validChoice){        
        if(userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors" && userChoice !== null){
            userChoice = prompt("Invalid choice. Enter either rock, paper or scissors: \n\n");
        } else {
            validChoice = true;
        } 
    }

    return userChoice;
}

//return either "rock", "paper" or "scissors"
function generateChoice() {

    choiceNumber = Math.floor(Math.random() * 3) + 1; // pick random integer between 1 and 3
    
    choice = (choiceNumber === 1)? "rock": // assign corresponding string value
    (choiceNumber === 2)? "paper":
    "scissors";

    return choice;

}

//return either "user" or "computer"
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

//prints round results on the browser console
function displayRoundResults(userChoice, computerChoice, roundWinner, 
        userVictories, computerVictories) {
    
    console.log("\n\n");

    console.log("Round results:")
    
    if (userChoice === null) {
        console.log("The user didn't pick anything on this round" );
    } else {
        console.log("The user picked " + userChoice);
    }

    console.log("The computer picked " + computerChoice);

    if (roundWinner){
        console.log("The " + roundWinner + " won this round!");
    } else console.log ("This round was a tie!")

    console.log("\n\n");

    console.log("User victories: " + userVictories);
    
    console.log("Computer victories: " + computerVictories);
}

//returns either "user", "computer" or null
function pickFinalWinner(counterA, counterB){ //user and computer victory counters, in that order
    let finalWinner = (counterA > counterB)? "user" :
        (counterB > counterA)? "computer" :
        null;
    
    return finalWinner;
}

//prints the match winner on the console
function displayFinalWinner(finalWinner){
    console.log("\n\n");
    if(finalWinner){
        console.log("And the final winner was the " + finalWinner + "!!!");
    } else console.log("This game was a tie! I guess someone quit early, eh?")
}



//main game function
function rockPaperScissors(){
    
    displayInstructions();

    let keepPlaying = true; 
    let userChoice;

    while(keepPlaying && (userChoice !== null)){ // until the user quits or cancels the input

        let userVictories = 0;
        let computerVictories = 0;

        //goes on for up to a best of 5
        while(userVictories < 3 && computerVictories < 3 && (userChoice !== null)) {
             
            userChoice = getUserChoice();
            
            //clear screen for new round
            console.clear();


            let computerChoice = generateChoice();
    
            //choose the round winner:
            let roundWinner = pickRoundWinner(userChoice, computerChoice);

            if (roundWinner === "user") {
                userVictories++;
            } else if (roundWinner === "computer") { 
                computerVictories++;}
            
            
            //outputs the round's overview
            displayRoundResults(userChoice, computerChoice, roundWinner, userVictories,
                    computerVictories);
    }
        //outputs final winner
        finalWinner = pickFinalWinner(userVictories, computerVictories);
        displayFinalWinner(finalWinner);
    

        //confirm if they wanna play again
        keepPlaying = confirm("The match is over. Do you wanna play again?");

        //clears screen after game ends
        console.clear();
        console.log("\n\n");

    }

    displayStartMessage();
}

displayStartMessage();