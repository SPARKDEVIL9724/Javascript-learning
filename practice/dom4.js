// // Replacing Elements

// // method 1
// function replaceFirstItem(){
//     const firstItem = document.querySelector('li:first-child');

//     const li = document.createElement('li');
//     li.textContent = 'Soyabean';
//     firstItem.replaceWith(li);
// }
// replaceFirstItem();

// // method 2
// function replaceSecondItem(){
//     const secondItem = document.querySelector('li:nth-child(2)');
    
//     secondItem.outerHTML = '<li>Replace Second</li>';
// }
// replaceSecondItem();

// // replace child using parent
// function replaceChildMethod(){
//     const header =document.querySelector('header'); //parent
//     const h1 = document.querySelector('header h1');
//     const h2 = document.createElement('h2');
//     h2.id='app-title';
//     h2.textContent='Pokemon';
//     header.replaceChild(h2, h1);
//     // parent.replaceChild(newElement, previousElement);
// }
// replaceChildMethod();

// // exercise
// // changing all elements using forEach exercise
// function replaceAllItems(){
//     const li = document.querySelectorAll('li');
//     // li.forEach((item, index) => item.outerHTML = `<li>Replace ${index+1} </li>`);
//     li.forEach((item, index) => item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Replace</li>');
// }
// // replaceAllItems();

/////////////////////////////////////////////////////////

// Remove Elements

// 1) remove
function removeClrButton(){
    const clrButton = document.querySelector('#clear');
    clrButton.remove();
}

removeClrButton();

// 2) removeChild
function removeChildMethod(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');
    ul.removeChild(li);
}
removeChildMethod();

// remove item exercise
function removeItem(itemNumber){
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
}
removeItem(2);

function removeItem2(itemNumber){
    const li = document.querySelectorAll('li');
    li[itemNumber-1].remove();
}
removeItem2(1);
