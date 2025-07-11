const game = document.querySelector('.game');
const divContainer = document.querySelector('.container');

// game buttons
for(let i=0;i<9;i++){
    const box = document.createElement('button');
    box.className = 'box';
    box.textContent = '';
    game.appendChild(box);
}

// reset Game Button
const resetButton = document.createElement('button');
resetButton.id = 'reset-btn';
resetButton.textContent = 'Reset Game';
// document.body.insertAdjacentElement('beforeend', resetButton);
document.body.querySelector('main').appendChild(resetButton);

let turn0 = true;
const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

// events
