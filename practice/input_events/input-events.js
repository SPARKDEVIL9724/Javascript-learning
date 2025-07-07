const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e){
    console.log('Input');
    console.log(e.target.value); // gives everything that is inputted
    heading.textContent = e.target.value;
}

function onChecked(e){
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus(e){
    console.log('focused');
    itemInput.style.outlineStyle = 'Solid';
    itemInput.style.outlineColor = 'green';
    itemInput.style.outlineWidth = '2px';
}

function onBlur(e){
    console.log('blurred');
    itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput);
// priorityInput.addEventListener('change', onInput);
priorityInput.addEventListener('input', onInput);
checkbox.addEventListener('input', onChecked);

// focus -> clicking in the writting area
itemInput.addEventListener('focus', onFocus);
// blur -> clicking outside writing area
itemInput.addEventListener('blur', onBlur);