const board = document.getElementById('board');
const boardSize = 15;
let boardArray = Array(boardSize).fill().map(() => Array(boardSize).fill(null));

function drawBoard() {
    board.innerHTML = '';
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', `cell-${i}-${j}`);
            cell.classList.add('cell');
            cell.addEventListener('click', () => placeStone(i, j));
            board.appendChild(cell);
        }
    }
}

function placeStone(i, j) {
    if (boardArray[i][j] === null) {
        boardArray[i][j] = 'X'; // 假设玩家1先手
        const cell = document.getElementById(`cell-${i}-${j}`);
        cell.textContent = 'X';
        // 检查是否有五子连线
        // 检查游戏是否结束
    }
}

drawBoard();