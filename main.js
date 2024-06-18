const box = document.querySelectorAll('.box'),
    winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

let gameOver = false,
    currentPlayer = 'x',
    xo = new Array(9).fill(null)

box.forEach((item, index) => {
    item.onclick = () => handleBoxClick(item, index)
})

function handleBoxClick(item, index) {
    if (gameOver || xo[index] !== null) {
        return
    }

    xo[index] = currentPlayer
    item.innerText = currentPlayer

    if (checkWinner(currentPlayer)) {
        alert(currentPlayer + ' wins!')
        gameOver = true
        return location.reload()
    }

    if (xo.every(cell => cell !== null)) {
        alert("It's a draw!")
        gameOver = true
        return
    }

    currentPlayer = currentPlayer === 'x' ? 'o' : 'x'
}

function checkWinner(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => xo[index] === player)
    })
}