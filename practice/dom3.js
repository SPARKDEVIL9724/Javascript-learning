// // Creating and Appending Items
// const div = document.createElement('div');
// div.className = 'my-element';
// div.id = 'my-element';
// div.setAttribute('title','my-element');
// // div.innerText='Pikachu';
// const text = document.createTextNode('Pikachu');
// //appends a child/element/node into an element
// div.appendChild(text);
// // document.body.appendChild(div); //appending elements
// document.querySelector('ul').appendChild(div);
// console.log(div);

// //// Making function to add elements
// // 1) quick and dirty way
// function createListItem(item){
//     const li = document.createElement('li');
//     li.innerHTML=`${item}
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//     document.querySelector('.items').appendChild(li);
// }
// createListItem('Soyabean');

// // 2) clean and preformat way --> Better Way
// function createNewItem(item){
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item));

//     const button = document.createElement('button');
//     button.className='remove-item btn-link text-red';
    
//     const icon = document.createElement('i');
//     icon.className='fa-solid fa-xmark';
    
//     button.appendChild(icon);
//     li.appendChild(button);

//     document.querySelector('.items').appendChild(li);
// }
// createNewItem('Bread');

// // breaking it to multiple functions
// function createButton(classes){
//     const button = document.createElement('button');
//     button.className=classes;
//     return button;
// }
// function createIcon(classes){
//     const icon = document.createElement('i');
//     icon.className=classes;
//     return icon;
// }
// function createItem(item){
//     const li = document.createElement('li');
//     const text = document.createTextNode(item);
//     li.appendChild(text);
//     const button = createButton('remove-item btn-link text-red');
//     const icon = createIcon('fa-solid fa-xmark');
//     button.appendChild(icon);
//     li.appendChild(button);
//     document.querySelector('.items').appendChild(li);
// }
// createItem('Cheese');
// createItem('Butter');

//////////////////////////////////////////////////

// //// Inserting elements in webpage using JS

// // insertAdjacentElement  ->takes a position
// function insertElement(){
//     const filter = document.querySelector('.filter');
    
//     const h1 =document.createElement('h1');
//     h1.textContent='insertAdjacentElement';
//     filter.insertAdjacentElement('beforebegin',h1);
// }
// insertElement();
// // insertAdjacentText  -> takes a position
// function insertText(){
//     const item = document.querySelector('li:first-child');
//     item.insertAdjacentText('afterend','insertAdjacentText');
// }
// insertText();
// // insertAdjacentHTML  -> takes a position
// function insertHTML(){
//     const clrBtn = document.querySelector('#clear');

//     clrBtn.insertAdjacentHTML('afterbegin','<h2>insertAdjacentHTML</h2>');
// }
// insertHTML();
// /* poitions for insertAdjacent 
// <!-- beforebegin -->
// <p>
// <!-- afterbegin -->
// text
// <!-- beforeend -->
// </p>
// <!-- afterend -->
// */

// // insertBefore
// function insertBeforeItem(){
//     const ul=document.querySelector('ul'); //parent
//     const li = document.createElement('li');
//     li.textContent = 'insertBefore';
//     const thirdItem = document.querySelector('li:nth-child(3)');
//     ul.insertBefore(li, thirdItem);
//     //parent.insertBefore(element, refrence);
// }
// insertBeforeItem();