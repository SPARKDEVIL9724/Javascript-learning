const itemInput = document.querySelector('#item-input');

const onKeyPress = e => {
    console.log('Key Pressed');
}
const onKeyUp = e => {
    console.log('Key Up');
}
const onKeyDown = e => {
    console.log('Key Down');
    // key
    console.log(e.key);
    // if (e.key === 'Enter'){
    //     alert('enter');
    // }

    // keyCode
    // https://www.toptal.com/developers/keycode/table
    // if (e.keyCode === 13){
    //     alert('pressed enter');
    // }

    // code -> KeyF Digit4
    console.log(e.code);

    // // key properties 
    // if(e.repeat){
    //     console.log(`Holding down ${e.key}`);
    // }
    console.log('shift '+ e.shiftKey);
    console.log('ctrl '+ e.ctrlKey);
    console.log('alt '+ e.altKey);
}

// keypress -> trigeres when keyboard key is pressed (one triger per press)
// itemInput.addEventListener('keypress', onKeyPress);
// keyup -> trigeres when keyboard key iss released
// itemInput.addEventListener('keyup', onKeyUp);
// keydown -> trigers when keys are pressed(down) (keeps trigering when key is pressed)
itemInput.addEventListener('keydown', onKeyDown);
