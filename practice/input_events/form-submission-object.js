const form = document.getElementById('item-form');

function onSubmit(e){
    e.preventDefault(); //to stop page from submitting it into itself
    // console.log('Submit');
    
    const item = document.getElementById('item-input');
    const priority = document.getElementById('priority-input');

    if (item.value === '' || priority.value === '0'){
        alert('Please fill in all fields');
    }
    console.log(item.value, priority.value);

}

function onSubmit2(e){
    e.preventDefault();

    const formData = new FormData(form);
    // console.log(formData); // gives prototype

    const item = formData.get('item'); // item -> name
    const priority = formData.get('priority');
    // console.log(item,priority);
    
    // entries() method -> gives an iterator
    const entries = formData.entries()
    // console.log(entries);
    for(let entry of entries){
        console.log(entry);
        // gives an array with name(property) and value
        // ['item', 'milk']
    }
}

// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);