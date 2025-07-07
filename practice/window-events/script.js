// when script tag is in head, selecting using document diectly 
// const h1 = document.querySelector('h1'); 
// gives error 

// this is a way then 
// window.onload =function () {
//     document.querySelector('h1').textContent = 'Pokemon';
// }

// way 2 
// load runs when all the page resources finish loading
// window.addEventListener('load', () => {
//     document.querySelector('h1').textContent='Pokemon';
// });

// way 3
/// DOMContentLoaded rus as soon as DOM is parsed
// window.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('h1').textContent='Pokemon';
// });

// way 4 adding defer attribute to script tag
// <script src="script.js" defer></script>
// document.querySelector('h1').textContent = 'Pokemon'; 

window.addEventListener('resize', () => {
    document.querySelector('h1').textContent
     = `Resized to ${window.innerWidth} X ${window.innerHeight}`; 
});

window.addEventListener('scroll', () => {
    document.querySelector('h1').innerText = 
    `Scrolled: ${window.scrollX} X ${window.scrollY}`;
    if(window.scrollY > 10){
        document.body.style.color = 'green';
    }
    else {
        document.body.style.color = 'black';
    }
});

window.addEventListener('focus', () => {
    document.querySelector('p').style.color='blue';
});
window.addEventListener('blur', () => {
    document.querySelector('p').style.color='black';
});

