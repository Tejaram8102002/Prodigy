
// Constants
const playerX = 'X';
const playerO = 'O';

// Initial game state
let currentPlayer = playerX;
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// DOM elements
const boardElement = document.getElementById('board');

// Create the game board
for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', () => cellClicked(i));
    boardElement.appendChild(cell);
}

// Function to handle a cell click
function cellClicked(index) {
    if (!gameActive || gameBoard[index] !== '') {
        return;
    }

    gameBoard[index] = currentPlayer;
    renderBoard();

    if (checkWinner()) {
        alert( {currentPlayer} = "Wins!!" );
        gameActive = false;
    } else if (isBoardFull()) {
        alert("It's a draw!");
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === playerX ? playerO : playerX;      
}
}

// Function to render the current state of the board
function renderBoard() {
    gameBoard.forEach((value, index) => {
        document.getElementsByClassName('cell')[index].textContent = value;
    });
}

// Function to check if there is a winner
function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
    });
}

// Function to check if the board is full (a draw)
function isBoardFull() {
    return gameBoard.every(cell => cell !== '');
}
