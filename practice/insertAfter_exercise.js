// creating our own insertAfter function
// insertAfter(element, reference);

const li = document.createElement('li');
li.textContent='insertAfter';

const button = document.createElement('button');
button.className = 'remove-item btn-link text-red';

const icon = document.createElement('i');
icon.className = 'fa-solid fa-xmark';

button.insertAdjacentElement('beforeend',icon);
li.insertAdjacentElement('beforeend',button);
const firstItem =document.querySelector('li:first-child');

// method 1
function insertAfter(element, reference){
    reference.insertAdjacentElement('afterend',element);
}
insertAfter(li, firstItem);

// method 2
function insertAfter2(element,reference){
    reference.parentElement.insertBefore(element,reference.nextSibling);
}
insertAfter2(li,firstItem);