Memory Match Game 🃏
A fun and interactive memory card matching game built with HTML, CSS, and JavaScript. Test your memory by flipping cards, finding pairs, and tracking your score. The game includes a leaderboard that ranks players based on their score, making it perfect for friendly competitions!


🎮 Features
Card Matching Logic: Flip and match pairs of cards to complete the game.
Score Tracking: Counts the number of guesses it takes to find all pairs.
Leaderboard: Displays players' scores, sorted from the fewest guesses to the most.
Restart Button: Quickly restart the game with a shuffled deck.
Responsive Design: Works well on both desktop and mobile devices.


📐 Data Structure & Game Logic
The game uses several data structures and functions to keep track of the game state, handle card interactions, and display the leaderboard.

1. Card Array (cards)
javascript
var cards = [
    {value: '2', image: './images/clubs_2.svg', matched: false},
    ...
];
Purpose: The cards array holds objects representing each card's value, image path, and whether it has been matched.
Usage: This array is shuffled at the start of each game, and each card’s state is updated based on user actions.

2. Helper Arrays: st and winners
st: Temporarily stores the index of the first flipped card to compare against the second flipped card.
winners: Keeps track of player scores. Each entry has a player ID and score (number of guesses), which are sorted and displayed on the leaderboard.

3. Game Control Variables
canGuess: Boolean flag to prevent clicking while animations or card resets are in progress.
flippedCards: Counter to track how many cards have been matched.
guess_no: Tracks the number of guesses (clicks on pairs) during a game session.

4. Functions
shuffle(array): Implements the Fisher-Yates algorithm to shuffle the cards array at the start of each game.
updateLeaderbord(): Sorts and displays the winners array in ascending order of guesses. Appends HTML elements dynamically to show ranks and scores.
reset(): Resets all game variables, updates the leaderboard, flips all cards back, and shuffles the cards for a new game.

5. Event Listeners
Each card element has a click event listener to handle flipping logic:
If the selected card is already matched or in the process of flipping, the event is ignored.
For the first card in a pair, it is stored in st. For the second card, the game checks if it matches the first.
Match: Both cards are marked as matched, flippedCards is incremented, and if all pairs are matched, the game is won, and the score is recorded.
No Match: Cards are flipped back after a short delay, allowing the player to try again.


🚀 How to Play
Click on any two cards to reveal them.
If they match, they stay visible. If they don’t, they flip back.
Keep matching pairs until all cards are revealed!
Your score (number of guesses) is recorded and displayed on the leaderboard.

🖥️ Tech Stack
HTML: Structure
CSS: Styling and layout
JavaScript: Game logic and interactivity
🧠 Data Structure Summary
Card Array: Stores card information (value, image, matched state).
Helper Arrays: st for current flipped cards, winners for player scores.
Game Control Variables: canGuess, flippedCards, guess_no for managing game flow.
🚩 Possible Enhancements
Player Names: Allow players to enter their names for a personalized leaderboard.
Dynamic Game Modes: Add difficulty levels by increasing or decreasing the number of cards.
Animations: Enhance the visual appeal with card flip animations and smoother transitions.
