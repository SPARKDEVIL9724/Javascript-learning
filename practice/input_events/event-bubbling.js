//event bubbling -> event is first handled by innermost element then moves up the tree

const button = document.querySelector('form button');
// const div = document.querySelector('.form-control');
const div = button.parentElement;
const form = document.querySelector('form');
const body = document.body;

// button<div<form<body

button.addEventListener('click', (e) => {
    alert('Button was clicked');
    e.stopPropagation(); //to stop propagation
});

div.addEventListener('click', ()=>{
    alert('Div was clicked');
});

form.addEventListener('click', ()=>{
    alert('Form was clicked');
});

body.addEventListener('click', () => {
    alert('Body was clicked');
});

