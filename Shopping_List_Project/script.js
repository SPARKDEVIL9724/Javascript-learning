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
}
// remove list item
function removeListItem(e){
    const item = e.target.parentElement.parentElement;
    itemList.removeChild(item);
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

// clear all button
const clrButton = createButton("btn-clear");
clrButton.id = 'clear';
clrButton.textContent = 'Clear All';
divContainer.insertAdjacentElement('beforeend', clrButton);

// events 
document.querySelector('.btn').addEventListener('click', addItem);

clrButton.addEventListener('click', clearAll);

document.querySelectorAll('li').forEach((item) =>
    item.querySelector('button i').addEventListener(
        'mouseover', () => {
            item.style.border = 'red 1px solid';
}));
document.querySelectorAll('li').forEach((item) =>
    item.querySelector('button i').addEventListener(
        'mouseout', () => {
            item.style.border = '#ccc 1px solid';
}));

document.querySelectorAll('li').forEach((item) =>
    item.querySelector('button i').addEventListener(
        'click', removeListItem
));

document.querySelectorAll('li').forEach((item) => {
    item.addEventListener('mouseover',() => {
        item.style.color = 'green';
        item.style.backgroundColor = '#eee';
    });
});
document.querySelectorAll('li').forEach((item) => {
    item.addEventListener('mouseout',() => {
        item.style.color = 'black';
        item.style.backgroundColor = '#f5f5f5';
    });
});