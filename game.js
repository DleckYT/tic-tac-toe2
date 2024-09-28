// Select all the cells (TD elements) from the grid
const cells = document.getElementsByTagName('td')

// Keep track of the current player (X or O)
let currentPlayer = 'X'
let gameIsOver = false

// Create an array to represent the board state
let board = Array(9).fill(null)

// Function to update the subtitle with the current player's turn or winner
function updateSubtitle(message) {
  document.getElementById('subtitle').innerHTML = message
}

// Function to handle cell clicks
function handleClick(event) {
  if (gameIsOver) return // Exit if the game is over

  // Get the clicked cell and its index in the table
  let cell = event.target
  let index = Array.from(cells).indexOf(cell)

  // If the cell is already filled, return
  if (board[index] !== null) return

  // Update the board and the cell with the current player's symbol
  board[index] = currentPlayer
  cell.innerHTML = currentPlayer

  // Check for a win or stalemate
  checkForWin(currentPlayer)

  // If the game isn't over, switch turns
  if (!gameIsOver) {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    updateSubtitle(`${currentPlayer}'s turn!`)
  }
}

// Function to check for a win or stalemate
function checkForWin(symbol) {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Horizontal
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Vertical
    [0, 4, 8],
    [2, 4, 6], // Diagonal
  ]

  // Check if any win pattern is satisfied
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern
    if (board[a] === symbol && board[b] === symbol && board[c] === symbol) {
      gameIsOver = true
      updateSubtitle(`${symbol} wins!`)
      return
    }
  }

  // Check for a stalemate (if all cells are filled and no winner)
  if (board.every((cell) => cell !== null)) {
    gameIsOver = true
    updateSubtitle('Stalemate!')
  }
}

// Attach event listeners to all cells
for (let cell of cells) {
  cell.addEventListener('click', handleClick)
}

// Initialize the game by setting the first turn
updateSubtitle("X's turn!")
