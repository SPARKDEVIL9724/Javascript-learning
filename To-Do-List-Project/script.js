const taskList = document.querySelector('.tasks');
const task = document.querySelector('.form-input');
const divContainer = document.querySelector('.container');

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
function createTask(item){
    // itemListStored.push(item);  
    const li = document.createElement('li');
    li.className = 'tasks';
    li.textContent = item;
    const button = createButton("remove-item btn-link text-red");
    const icon = createIcon("fa-solid fa-xmark");
    button.appendChild(icon);
    li.appendChild(button);
    taskList.appendChild(li);
}

createTask('helli');
createTask('pokemon');
const appHeader = document.createElement('header');
const heading = document.createElement('h1');
heading.id = 'app-title';
heading.textContent = 'To Do List';
appHeader.appendChild(heading);
divContainer.insertAdjacentElement('afterbegin', appHeader);