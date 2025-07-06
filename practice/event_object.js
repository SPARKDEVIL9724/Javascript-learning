const clrButton = document.querySelector('#clear');

function onClick(e){
    // e => event object(type - pointerEvent)
    console.log(e);
    // target -> the element that triggered the event
    console.log(e.target);
    e.target.style.backgroundColor = 'pink';
    // currentTarget -> the element that the event listener is attechd to
    console.log(e.currentTarget);

    // document.body.addEventListener('click', function(event){
    //     console.log(event.target);
    //     console.log(event.currentTarget);
    // });

    // type -> the type of event that was triggered
    console.log(e.type);
    // timeStamp -> the time at which the event was triggered
    console.log(e.timeStamp);

    // clientX -> the x position of the mouse click relative to the window
    // clienty -> the y position of the mouse click relative to the window
    console.log(e.clientX);
    console.log(e.clientY);

    // offsetX -> the x position of the mouse click relative to the element
    // offsetY -> the y position of the mouse click relative to the element
    console.log(e.offsetX);
    console.log(e.offsetY);
    
    // pageX -> the x position of the mouse click relative to the page
    // pageY -> the y position of the mouse click relative to the page
    console.log(e.pageX);
    console.log(e.pageY);
    
    // screenX -> the x position of the mouse click relative to the screen
    // screenY > the y position of the mouse click relative to the screen
    console.log(e.screenX);
    console.log(e.screenY);
}
function onDrag(e){
    document.querySelector('h1').textContent = `X: ${e.clientX} Y: ${e.clientY}`; 
}

clrButton.addEventListener('click',onClick);
clrButton.addEventListener('drag', onDrag);

const link = document.querySelector('a');
link.addEventListener('click', function(e){
    e.preventDefault();
    // prevents the default behaviour of the link/button
    console.log("Link Clicked");

});
