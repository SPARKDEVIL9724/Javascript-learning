// Adding and Removing Styles and Classes
const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');

function run(){
    // // className -> gives a string of all the class names
    // console.log(itemList.className);
    // text.className = 'card dark';

    // classList -> gives adom token list (allows advance arrray methods)
    text.classList.add('dark');
}

document.querySelector('button').onclick = run;
