/*

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
            let roundWinner;
            if userChoice === "rock":
                and computerChoice === "rock":
                    do nothing;
                and computerChoice === "paper":
                    roundWinner = "computer";
                and computerChoice === "scissors":
                    roundWinner = "user";
            
            if userChoice === "paper":
                and computerChoice === "rock":
                    roundWinner = "user";
                and computerChoice === "paper":
                    do nothing;
                and computerChoice === "scissors":
                    roundWinner = "computer";
            
            if userChoice === "scissors":
                and computerChoice === "rock":
                    roundWinner = "computer";
                and computerChoice === "paper":
                    roundWinner = "user";
                and computerChoice === "scissors":
              
                  do nothing;


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