const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');

// Asynchronous Programming
function hello(){
    h1.textContent = 'Pokemon';
}
// setTimeout(function, time in ms);
setTimeout(hello, 3000); //1s=1000ms
setTimeout(() => {
    h2.textContent = 'Pikachu';
}, 5000);
h3.textContent = 'Bulbasaur';

// CallBacks
function sum(a,b){
    h4.textContent = a+b;
}
function calculator(a, b, sum){
    sum(a,b);
}

calculator(5,10,sum);
calculator(10,15,(a,b)=>h1.textContent=a+b);

