let itemListStored = [];
const divContainer = document.querySelector('.container');
const itemList = document.getElementById('item-list');
const form = document.getElementById('item-form');

function createIcon(cls){
    const icon = document.createElement('i');
    icon.className = cls;
    return icon;
}

function createButton(cls){
    const button = document.createElement('button');
    button.className = cls;
    return button;
}

// create list items
function createListItem(item){
    itemListStored.push(item);  
    const li = document.createElement('li');
    li.className = 'items';
    li.textContent = item;
    const button = createButton("remove-item btn-link text-red");
    const icon = createIcon("fa-solid fa-xmark");
    button.appendChild(icon);
    li.appendChild(button);
    itemList.appendChild(li);
}

// clear All
function clearAll(){
    const li = document.querySelectorAll('li');
    li.forEach((item) => itemList.removeChild(item));
}

// add item
function addItem(e){
    e.preventDefault();
    const formData = new FormData(form);
    const item = formData.get('item');
    createListItem(item);
    document.getElementById('item-input').value = '';
    // localStorage.setItem('items', itemListStored);
}

// remove list item
function removeListItem(e){
    const item = e.target.parentElement.parentElement;
    localStorage.setItem('itemre', item.innerText);
    const index = itemListStored.indexOf(item.innerText);
    itemList.removeChild(item);
    console.log(itemListStored);
    const x = [];//,(itemListStored.slice(index+1, itemListStored.length))];
    itemListStored.forEach(i => {
        if(i !== item.innerText){
            x.push(i);
        }
    });
    localStorage.setItem('item', x);
}

//filter item
function onFilter(e){
    const li = document.querySelectorAll('li');
    li.forEach((item) => {
        if(item.textContent.includes(e.target.value) && e.target.value !== ''){
            item.style.color = 'green';
            item.style.border = 'green solid 2px';
        }
        else{
            item.style.color = 'black';
            item.style.border = '#ccc 1px solid';
        }
    });
}

//dynamic list item styling
function onMouseOver(){
    document.querySelectorAll('li').forEach((item) => {
        item.addEventListener('mouseover',() => {
        item.style.color = 'blue';
        item.style.backgroundColor = '#eee';
        });
    });
    
    document.querySelectorAll('li').forEach((item) =>{

        item.querySelector('button i').addEventListener(
            'mouseover', () => {
                item.style.border = 'red 2px solid';
        });
        item.querySelector('button i').addEventListener(
        'click', removeListItem
        );
    });
}

function onMouseOut(){
    document.querySelectorAll('li').forEach((item) => {
        item.addEventListener('mouseout',() => {
            item.style.color = 'black';
            item.style.backgroundColor = '#f5f5f5';
        });
        item.querySelector('button i').addEventListener(
            'mouseout', () => {
            item.style.border = '#ccc 1px solid';
        });
    });
}


//add item button
const formCtrl = document.createElement('div');
formCtrl.className = 'form-control';
const addItemButton = createButton('btn');
addItemButton.type = 'submit';
addItemButton.insertAdjacentElement('afterbegin', createIcon("fa-solid fa-plus"));
addItemButton.appendChild(document.createTextNode(' Add Item'));
formCtrl.appendChild(addItemButton);
form.insertAdjacentElement('beforeend', formCtrl);

// app-header 
const appHeader = document.createElement('header');
const heading = document.createElement('h1');
heading.id = 'app-title';
heading.textContent = 'Shopping List';
appHeader.appendChild(heading);
divContainer.insertAdjacentElement('afterbegin', appHeader);

// clear all button
const clrButton = createButton("btn-clear");
clrButton.id = 'clear';
clrButton.textContent = 'Clear All';
divContainer.insertAdjacentElement('beforeend', clrButton);

// restoring items form localstorage
itemListStored = localStorage.getItem('items');
if(localStorage.getItem('items') && itemListStored.length > 0){
    itemListStored = localStorage.getItem('items').split(',');
    itemListStored.forEach(item => {
        createListItem(item);
    });
} 
else{
    itemListStored = [];
}

// events 
document.querySelector('.btn').addEventListener('click', (e) => {
    addItem(e);
    localStorage.setItem('items', itemListStored);
});

clrButton.addEventListener('click', clearAll);


itemList.addEventListener('mouseover', onMouseOver);

itemList.addEventListener('mouseout', onMouseOut);

const itemFilter = document.querySelector('.filter input');
itemFilter.addEventListener('input' , onFilter);
