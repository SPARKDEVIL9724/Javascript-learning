// Adding and Removing Styles and Classes
const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');

function run(){
    // // className -> gives a string of all the class names
    // console.log(itemList.className);
    // text.className = 'card dark';

    // // classList -> gives adom token list (allows advance arrray methods)
    // text.classList.add('dark');
    // text.classList.remove('card');
    // text.classList.toggle('dark'); // for dark mode
    // text.classList.toggle('hidden'); //adds and removes a class on event
    // text.classList.replace('card','dark'); // replaces the card with dark class

    // // change style
    // itemList.style.lineHeight = '3';
    // items.forEach((item, index) => {
    //     item.style.color = 'red';
    //     if (index===2){
    //         item.style.color = 'green';
    //     }
    // });
}

document.querySelector('button').onclick = run;
