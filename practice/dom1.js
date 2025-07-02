// document object -> an object of windows object
// console.log(document); //to get complete html file
// console.dir(document); //to get document object methods
// console.log(document.body.innerText); //gives the text in body
// console.log(document.body.innerHTML); //gives the HTML code of the body
// document.write("Pokemon");
// console.log(document.body.children); //gives a HTML collection of direct children of body
// console.log(document.body.children[0].className); //gives the class of mentioned element
let result;
result=document.all;
result=Array.from(result);
console.log(result);

//single Selectors
let output;
const form=document.getElementById('item-form'); // to get element by id
form.setAttribute('class','newClass'); // to set attribute of element
output=form.getAttribute('class'); //to get attribute of the given element
console.log(output);