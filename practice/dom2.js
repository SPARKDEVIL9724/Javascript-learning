// //// Traversing DOM
// //Every HTML tag is a node
// let output;
// const parent=document.querySelector('.parent');

// //gives a (HTML collection) of all the children of the parent
// output=parent.children; 
// output=parent.children[1].innerText;
// output=parent.children[1].nodeName;
// parent.children[1].innerText='Pikachu';
// parent.children[1].style.color='yellow';
// parent.children[1].style.backgroundColor='brown';

// //for the first child of an element
// parent.firstElementChild.innerText='Bulbasaur';

// //for the last child of an element
// parent.lastElementChild.innerText='Charmander';

// //get parent elements from child
// const child=document.querySelector('.child');
// output=child.parentElement;
// child.parentElement.style.border='3px solid black';
// child.parentElement.style.padding='10px';

// //sibling elements
// const secondItem =document.querySelector('.child:nth-child(2)');
// output=secondItem;
// output=secondItem.nextElementSibling;
// secondItem.nextElementSibling.style.color='orange';
// secondItem.previousElementSibling.style.color='green';

// console.log(output);
///////////////////////////////////////////////////////

// // Nodes
// let output;
// const parent = document.querySelector('.parent');
// // gives all the children note of parent element
// // nodes contains everythoing -> tag, comment, text, whitespaces(text node)
// //returns a nodelist-> array methods can be used on nodelist
// output=parent.childNodes;
// // to access nodes based on indexing
// output=parent.childNodes[0];
// output=parent.childNodes[0].nodeName;
// output=parent.childNodes[3].textContent;
// output=parent.childNodes[3].outerHTML;
// parent.childNodes[3].innerText='Pikachu';
// parent.childNodes[5].style.color='red';

// //gives the first child node
// output=parent.firstChild;
// //gives the last child node
// output=parent.lastChild;
// parent.lastChild.textContent='Bulbasaur';

// //getting parent node
// const child=document.querySelector('.child');
// output=child.parentNode;
// child.parentNode.sytle.backgroundColor = 'grey';
// child.parentNode.style.padding ='10px';

// //getting siblings
// const secondItem=document.querySelector('.child:nth-child(2)');
// output=secondItem;
// //for next sibling node
// output=secondItem.nextSibling;
// //for previous sibling node
// output=secondItem.previousSibling;
// console.log(output);