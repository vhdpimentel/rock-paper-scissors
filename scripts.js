/*
    function pickWinner(choiceA, choiceB) {
        if choiceA === "rock":
            and choiceB === "rock":
                roundWinner = "no one, it was a tie!";
            and choiceB === "paper":
                roundWinner = "computer";
            and choiceB === "scissors":
                roundWinner = "user";
        
        if choiceA === "paper":
            and choiceB === "rock":
                roundWinner = "user";
            and choiceB === "paper":
                roundWinner = "no one, it was a tie!";
            and choiceB === "scissors":
                roundWinner = "computer";
        
        if choiceA === "scissors":
            and choiceB === "rock":
                roundWinner = "computer";
            and choiceB === "paper":
                roundWinner = "user";
            and choiceB === "scissors":
                roundWinner = "no one, it was a tie!";

    }


    the game will be played for a best of 5
    while no victory counter has reached 3: 
    let userVictories = 0;
    let computerVictories = 0;
    while(userVictories < 3 && computerVictories < 3) {
        the user will enter one of these options: 
        "rock", "paper" or "scissors"
           let userChoice = console.prompt("Choose"+
           " rock, paper or scissors:");



        the browser will come up with its own choice:
           let computerChoice = random between 1 and 3
           computerChoice = (computerChoice === 1)? ""rock"":
                           (computerChoice === 2)? ""paper"":
                           (computerChoice === 3)? ""scissors"";
                
            
        

        both will be compared to choose the round winner:
            let roundWinner = pickWinner;


            if (roundWinner === "user") {userVictories++;}
            else if (roundWinner === "computer") {computerVictories++;}
            
            
            the victorious party will be declared for this round
            console.log(roundWinner + " won this round!");
            console.log("user victories: " + userVictories);
            console.log("computer victories: " + computerVictories);
}
    final victory will be declared
    console log when the victory counter of either party reaches 3
 
    the user will ble able to choose to play again
        confirm if they wanna play again

 
 all of the inputs and outputs will happen through the
 browser 
    console, initially
*/