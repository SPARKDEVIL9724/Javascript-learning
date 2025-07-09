const divContainer = document.querySelector('.container');
let userScore = 0;
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
    const choice = e.target.innerText;
    const compChoice = computerChoice();
    let result = '';
    if (compChoice === choice){
        result = 'Draw';
    }
    else if (choice === 'Rock'){
        result = compChoice === 'Paper' ? 'Loss' : 'Win';
    }
    else if (choice === 'Scissor'){
        result = compChoice === 'Rock' ? 'Loss' : 'Win';
    }
    else {
        result = compChoice === 'Scissor' ? 'Loss' : 'Win';
    }
    return result;
}

// display score
function displayScore(result){
    const divScore = document.querySelector('.score');
    while(divScore.firstElementChild){
        divScore.removeChild(divScore.firstChild);
    };
    const displayUserScore = document.createElement('h2');
    const displayComputerScore = document.createElement('h2');
    const res = document.createElement('h3');
    res.textContent = result;
    displayUserScore.textContent = `Your Score: ${userScore}`;
    displayComputerScore.textContent = `Computer Score: ${computerScore}`;
    divScore.appendChild(displayUserScore);
    divScore.appendChild(displayComputerScore);
    divScore.appendChild(res);
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
    displayScore("Game Restarted");
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
        const result = checkChoice(e);
        console.log(result);
        if (result === 'Win'){
            userScore += 1;
        }
        else if(result === 'Loss'){
            computerScore += 1;
        }
        displayScore(result);
    });
});