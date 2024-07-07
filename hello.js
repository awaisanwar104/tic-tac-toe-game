  const board = document.querySelector('.board');
  let currentPlayer = 'X';
  let cells = Array.from({ length: 9 });
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('click', handleCellClick);
    board.appendChild(cell);
    cells[i] = cell;
  }
  function handleCellClick(event) {
    const cell = event.target;
    const index = cell.dataset.index;
    if (cells[index].textContent === '') {
      cells[index].textContent = currentPlayer;
      if (checkWin()) {
        alert(`${currentPlayer} wins!`);
        resetGame();
        return;
      }
      if (checkDraw()) {
        alert('Draw!');
        resetGame();
         return;
      }
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
  function checkWin() {
    const winningCombos = [
         [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6] 
    ];
    return winningCombos.some(combo => {
      const [a, b, c] = combo;
            return cells[a].textContent &&
        cells[a].textContent === cells[b].textContent &&
        cells[a].textContent === cells[c].textContent;
    });
  }
     function checkDraw() {
    return cells.every(cell => cell.textContent !== '');
  }
      function resetGame() {
    cells.forEach(cell => {
      cell.textContent = '';
    });
    currentPlayer = 'X';
  }