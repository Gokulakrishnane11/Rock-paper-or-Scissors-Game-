function play() {
    // Add alert
    alert('Hello There!!');

    // Add confirm alert
    let playGame = confirm("Shall We Play Rock, Paper, Scissors");
    // call the functoin  playground() .
    playground(this);

    // create the function  playground ()

    function playground(event) {
        if (playGame) {
            // Prompt alert for taking the input values
            let playChoice = prompt('Please Enter (Rock, Paper, or Scissors)');

            // Check if playChoice is null or empty and handle accordingly
            if (playChoice === null || playChoice.trim() === '') {
                let retry = confirm("Please enter Rock, Paper, or Scissors. Do you want to try again?");
                if (retry) {
                    // call the function for again jump to playChoice take the value again
                    playground(this);
                } else {
                    alert('Ok, I guess You Change your mind. Maybe next time. Bye!');
                }
            } else {
                let player1 = playChoice.trim().toLowerCase();

                // Check if the player entered a valid choice
                if (player1 === 'rock' || player1 === 'paper' || player1 === 'scissors') {
                    // Generate a random choice for the computer
                    let computerChoice = Math.floor(Math.random() * 3 + 1);
                    let computer = computerChoice === 1 ? 'rock' : computerChoice === 2 ? 'paper' : 'scissors';

                    // Determine the result
                    let result = computer === player1 ? 'Tie...!!' :
                        (computer === 'paper' && player1 === 'rock') ||
                            (computer === 'rock' && player1 === 'scissors') ||
                            (computer === 'scissors' && player1 === 'paper') ? 'Computer Wins...!' : 'You Win...!!';

                    // Display the result
                    alert(result);

                    // Ask the player if they want to play again
                    let playAgain = confirm('Play Again');
                    if (playAgain) {
                        // call the function for again jump to playChoice take the value again
                        playground(this);
                    } else {
                        alert('Ok, thanks for playing.');
                    }
                } else {
                    // Alert for wrong text input
                    let wrongText = confirm("You didn't enter Rock, Paper, or Scissors correctly. Do you want to try again?");
                    if (wrongText) {
                        // call the function for again jump to playChoice take the value again
                        playground(this);
                    } else {
                        alert('Ok, thanks for playing.');
                    }
                }
            }
        } else {
            // Alert for not wanting to play
            alert('Ok,Maybe next time. Bye!');
        }
    }
}