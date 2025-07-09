const divContainer = document.querySelector('.container');
let userScore = 10;
let computerScore = 0;
// create button
function createOptions(option){
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option;
    return button;
}

// get computer choice
function computerChoice(){
    const choices = ['Rock', 'Scissor', 'Paper'];
    const random = Math.floor(Math.random()*3);
    return choices[random];
}

// check user choice
function checkChoice(e){
    const choice = e.target.value;
    const computerChoice = computerChoice();
    let result = 'Pokemon';
    if (computerChoice === choice){
        result = 'Draw';
    }
    else if (choice === 'Rock'){
        result = computerChoice === 'Paper' ? 'Loss' : 'Win';
    }
    else if (choice === 'Scissor'){
        result = computerChoice === 'Rock' ? 'Loss' : 'Win';
    }
    else {
        result = computerChoice === 'Scissor' ? 'Loss' : 'Win';
    }
    return result;
}

// refresh Game
function refreshGame(){
    userScore = 0;
    computerScore = 0;
}

// header
const header = document.createElement('header');
const appHeading = document.createElement('h1');
appHeading.textContent = 'Rock Paper Scissor Game';
header.appendChild(appHeading);
divContainer.insertAdjacentElement('afterbegin',header);

// display score
const score = document.createElement('div');
score.className = 'score';
divContainer.appendChild(score);
const displayUserScore = document.createElement('h2');
const displayComputerScore = document.createElement('h2');
displayUserScore.textContent = `Your Score: ${userScore}`;
displayComputerScore.textContent = `Computer Score: ${computerScore}`;
score.appendChild(displayUserScore);
score.appendChild(displayComputerScore);

// createing option buttons
const choices = ['Rock', 'Scissor', 'Paper'];
choices.forEach((choice) => divContainer.insertAdjacentElement('beforeend', createOptions(choice)));


// creating refresh button
const refreshButton = document.createElement('button');
refreshButton.className = 'btn-refresh';
refreshButton.textContent = 'Refresh Game';
divContainer.insertAdjacentElement('beforeend', refreshButton);

// events
refreshButton.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
});

const options = document.querySelectorAll('.option-btn');
options.forEach((option) => {
    option.addEventListener('mouseover', () => {
        option.style.border = 'blue 2px solid';
    });
    option.addEventListener('mouseout', () => {
        option.style.border = '1px solid #ccc';
    });
    option.addEventListener('click', (e) =>{
        const result = document.createElement('h3');
        result.textContent = checkChoice(e);
        if (result.textContent === 'Win'){
            userScore += 1;
        }
        else if(result.textContent === 'Loss'){
            computerScore += 1;
        }
        score.appendChild(result);
    });
});