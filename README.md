# Rock, Paper, Scissors Game

This is a simple implementation of the **Rock, Paper, Scissors** game played between a human and the computer. The game is designed to run in the browser's JavaScript console. The player is prompted to input their choice of **Rock**, **Paper**, or **Scissors**, and the computer makes a random choice. The game consists of 5 rounds, and after each round, the winner is determined based on the standard rules:

- **Rock** beats **Scissors**
- **Scissors** beats **Paper**
- **Paper** beats **Rock**

At the end of 5 rounds, the scores are compared, and the winner is announced.

## Features

- **Random computer choice**: The computer randomly selects one of the three options: Rock, Paper, or Scissors.
- **Human choice via prompt**: The human player is asked to input their choice through a prompt.
- **Score tracking**: The game keeps track of both the human's and the computer's scores.
- **Round results**: After each round, the winner of the round is printed in the console, and the score is updated.
- **Final result**: After 5 rounds, the final score is displayed, and a winner is announced based on the score.

## How to Play

1. Open the browser's JavaScript console.
2. Paste the code into the console.
3. The game will prompt you to input your choice for each round.
4. The game will continue for 5 rounds, and after the game finishes, the winner will be displayed.

## Code Breakdown

### 1. `getComputerChoice()` Function
- This function generates a random number between 1 and 3, corresponding to the choices **Rock**, **Paper**, and **Scissors** respectively.
  
### 2. `getHumanChoice()` Function
- This function uses the `prompt()` function to ask the user to input their choice. It returns the player's input as a string.

### 3. `playRound()` Function
- This function compares the choices made by the computer and the human player for each round.
- It updates the score based on the standard rules of the game:
    - If the human and computer choices are the same, the round is a draw.
    - If the human player wins, their score is incremented.
    - If the computer wins, the computer's score is incremented.

### 4. `playGame()` Function
- This function manages the game loop, executing 5 rounds of the game.
- After each round, the result is logged to the console.
- After all rounds, the final result is announced based on the accumulated scores.

## Example Gameplay

Enter your choice: ROCK You win! ROCK beats SCISSORS ! Enter your choice: PAPER You lose! SCISSORS beats PAPER ! Enter your choice: SCISSORS You win! SCISSORS beats PAPER ! Enter your choice: ROCK You lose! PAPER beats ROCK ! Enter your choice: PAPER You win! PAPER beats ROCK !

After 5 rounds, the result will be shown in the console, such as:

YOU WIN!
DRAW!
YOU LOSE!


## Notes

- The game will end if the user cancels or closes the prompt input, in which case a message will be logged to the console.
- The game is played over 5 rounds, but you can adjust this number in the `playGame()` function if desired.
  
## Improvements

- Implementing a user interface (UI) for a more interactive experience.
- Adding an option to play again after the game ends.
- Handling invalid input more robustly, such as checking for invalid characters or inputs.

