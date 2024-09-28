const cells = document.getElementsByTagName('TD')

const X = 1
const O = 2
const empty = 0
const state = [_, _, _, _, _, _, _, _, _]

function checkForWin(symbol) {
  return false
}

const istalemate = state.every((cell) => cell !== empty)
const istalemate = !state.some((cell) => cell === empty)

function updateView() {
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i]
    const s = state[i]
    if (cells.firstChild) {
      switch (s) {
        case X:
          cell.firstChild.src = './images/x.png'
          break
        case O:
          cell.firstChild.src = './images/o.png'
          break
        case _:
          cell.firstChild.src = './images/empty'
          break
      }
    }
  }
}
