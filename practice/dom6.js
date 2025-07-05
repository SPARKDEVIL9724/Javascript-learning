// Events
//actions taken by the user on the page

const clrButton = document.querySelector('#clear');
function onClear(){
    const li = document.querySelectorAll('li');
    li.forEach((item) => item.remove());
}
function onClear2(){
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}

// way 1
// putting onclick="alert('clear')" attribute in an element/buttton
// putting onclick = function in element/button

// // way 2
// // Javascript Event Listener
// // you can have only one event this way
// clrButton.onclick = function () {
//     alert('Clear Items');
// };

// // way 3
// // addEventListener(typeOfEvent, callBackFunction);
// // You can have as many event listeners this way

// clrButton.addEventListener('click', function(){
//     alert('clear Items');
// });
// clrButton.addEventListener('click', () => alert('clear Items'));
clrButton.addEventListener('click', onClear);
clrButton.addEventListener('click', onClear2);
// // removeEventListener('action', function); -> remves the event
// setTimeout(() => clrButton.removeEventListener('click', onClear),5000);
// setTimeout(() => clrButton.click(), 5000); // .click -> to automatically click when browser loads
