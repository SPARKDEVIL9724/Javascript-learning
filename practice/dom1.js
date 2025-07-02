// document object -> an object of windows object
// console.log(document); //to get complete html file
// console.dir(document); //to get document object methods
// console.log(document.body.innerText); //gives the text in body
// console.log(document.body.innerHTML); //gives the HTML code of the body
// document.write("Pokemon");
// console.log(document.body.children); //gives a HTML collection of direct children of body
// console.log(document.body.children[0].className); //gives the class of mentioned element
// let result;
// result=document.all;
// result=Array.from(result); //to convert HTML collection to array
// console.log(result);

///////////////////////////////////////////////////////////////////
// single Selectors
// let output;
// const form=document.getElementById('app-title'); // to get element by id
// form.setAttribute('class','newClass'); // to set attribute of element
// output=form.getAttribute('class'); //to get attribute of the given element

// //change/get content
// output=form.textContent; //to get Text
// form.textContent='Pokemon';
// form.innerText='Shopping List';
// form.innerHTML='<strong>Pokemon</strong>';
// //change styles
// form.style.color='red';
// form.style.backgroundColor='black';
// form.style.padding='10px';
// form.style.borderRadius='10px';

// // document.querSelector() --> selects only the first one(selects only one)
// output=document.querySelector('h1'); //select by tag
// output=document.querySelector('#item-form'); //select by id
// output=document.querySelector('.container'); //select by class
// output=document.querySelector('input[type="text"]'); //select by attribute value
// output=document.querySelector('li:nth-child(2)');  //using css tags
// output.innerText='Pikachu';
// output.style.color='yellow';
// output.style.backgroundColor='black';

// // using methods on elements other than the document
// const list=document.querySelector('ul');
// output=list.querySelector('li');
// output.style.color='pink';
// console.log(output);

/////////////////////////////////////////////////////////////

// Selecting Multiple elements
// let output;
// //querySelectorAll() --> selects all the elements 
// // --> returns a nodelist(array methods can be used on nodelist)
// const listItemsUsingClass=document.querySelectorAll('.item'); //using class
// const listItems=document.querySelectorAll('li'); //using tag
// output=listItems[1].innerText;
// listItems.forEach((item, index) =>{
//     item.style.color='red';
//     if(index===1){
//         item.remove();
//     }
// });

// // using getElementsByClassNames('class') -->gives a HTML collection
// const listItems= document.getElementsByClassName('items');
// const listItemsArray=Array.from(listItems);
// output=listItemsArray;

// using getElementsByTagName('tag') -->gives a HTML collection
// const listItems = document.getElementsByTagName('li');
// output=listItems;
// console.log(output);

///////////////////////////////////////////////////////////////