// adding single event listener to multiple events together
 
const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// // way 1
// listItems.forEach(item => {
//     item.addEventListener('click',(e)=>{
//         e.target.remove();
//     });
// });

// way 2(event delegation)
list.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});

list.addEventListener('mouseover', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.style.color = 'green';
    }
});