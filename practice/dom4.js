// Replacing Elements

// method 1
function replaceFirstItem(){
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'Soyabean';
    firstItem.replaceWith(li);
}
replaceFirstItem();

// method 2
function replaceSecondItem(){
    const secondItem = document.querySelector('li:nth-child(2)');
    
    secondItem.outerHTML = '<li>Replace Second</li>';
}
replaceSecondItem();

// changing all elements using forEach exercise
function replaceAllItems(){
    const li = document.querySelectorAll('li');
    li.forEach((item,index) =>{
        item.outerHTML = `<li>Replace ${index+1}`;
    });
}
replaceAllItems()