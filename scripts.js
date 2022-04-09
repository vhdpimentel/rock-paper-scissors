/*
     the game will be played for a best of 5
     while no victory counter has reached 3: 
     let userVictories = 0;
     let computerVictories = 0;
     while(userVictories < 4 && computerVictories < 4) {
         the user will enter one of these options: 
         rock, paper or scissors
            let userChoice = console.prompt("Choose between"+
            " rock, paper and scissors:");



         the browser will come up with its own random choice:
            let computerChoice = random between 1 and 3
            computerChoice = (computerChoice == 1)? "rock":
                            (computerChoice == 2)? "paper":
                            (computerChoice == 3)? "scissors";
                
            
        

         both will be compared through conditional statements:
                
                if userChoice == "rock":
                    and computerChoice == rock:
                        do nothing;
                    and computerChoice == paper:
                        computer victories++;
                    and computerChoice == scissors:
                        user victories++;
                
                if userChoice == paper:
                    and computerChoice == rock:
                        user victories++;
                    and computerChoice == paper:
                        do nothing;
                    and computerChoice == scissors:
                        computer victories++;
                
                if userChoice == scissors:
                    and computerChoice == rock:
                        computer victories++;
                    and computerChoice == paper:
                        user victories++;
                    and computerChoice == scissors:
                        do nothing;


              the victorious party will be declared for this round
                 console log(victoriousPlayer(user))
     }
     final victory will be declared
     console log when the victory counter of either party reaches 3
 
     the user will ble able to choose to play again
         confirm if they wanna play again

 
 all of the inputs and outputs will happen through the
 browser console, initially
*/