const containerDiv = document.querySelector('.container');
const buttonDiv = document.querySelector('.buttons');
const calculatorInput = document.querySelector('.calculator-input');
const form = document.querySelector('.calculator-display');
let result = 0;
let operator;
let number = 0;

// operation
function operation(opp, numb, res){
    switch(opp){
        case '+':
            res += numb;
            break;
        case '-':
            res += numb;
            break;
        case '*':
            res += numb;
            break;
        case '/':
            res /= numb;
            break;
        default:
    }
    return res;
}

//create button function
function createButton(i){
    const button = document.createElement('button');
    button.textContent = i;
    buttonDiv.appendChild(button);
}

// app-heading
const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.textContent = 'Calculator';
header.appendChild(h1);
containerDiv.insertAdjacentElement('afterbegin', header);

// creating buttons
[1,2,3,4,5,6,7,8,9,0,'.','BackSpace','+','-','*','/','=','C'].forEach(i => createButton(i));

// events
const num = ['1','2','3','4','5','6','7','8','9','0'];
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    if(num.includes(button.innerText)){
        // localStorage.setItem('test', element.innerText);
        button.addEventListener('click', (e) => {
            // const head = document.querySelector('h1');
            number = number*10 + Number(e.target.innerText);
        });
    }
    else if(['+', '-', '*', '/'].includes(button.innerText)){
        button.addEventListener('click', (e) => {
            if(operator !== ''){
                result = operation(operator, number, result);
                number = 0;
                operator = '';
            }
            operator = button.innerText;
        });
    }
    else if(button.innerText === 'C'){
        button.addEventListener('click', (e) => {
            result = 0;
        });
    }
    

});
// window.addEventListener('keydown', (e) => {
//     if(e.key === 'Enter' || e.key === '='){
//         calculatorDisplay.value = result;
//     }
//     else if(num.includes(e.key)){
//         e.preventDefault();
//         const formData = new FormData(form);
//         const num = formData.set('item',e.key);
//     }
//     else{}
// });