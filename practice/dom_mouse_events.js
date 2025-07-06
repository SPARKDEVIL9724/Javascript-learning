// const Button = document.createElement('button');
// Button.textContent = 'click';
// Button.className = 'test';
// document.querySelector('body').insertAdjacentElement('beforebegin',Button);
const clrButton = document.querySelector('#clear');
const onClick = () => console.log('click Events');
const onDoubleClick =() => {
    console.log('Double click');
    if (document.body.style.backgroundColor !== 'red'){
        document.body.style.backgroundColor = 'red';
        document.body.style.color = 'white';}
    else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
};
const onRightClick = () => {
    document.body.style.backgroundColor='blue';
}
const onMouseDown = () => {
    document.body.style.backgroundColor='green';
    document.body.style.color = 'white';
}
const onMouseUp = () => {
    document.body.style.backgroundColor = 'yellow';
    document.body.style.color = 'black';
}
const onMouseWheel = () => {
    document.body.style.backgroundColor='orange';
}
const onMouseOver = () => {
    document.body.style.backgroundColor='pink';
}
const onMouseOut = () => {
    document.body.style.backgroundColor='purple';
}
const onDragStart = () => {
    document.body.style.backgroundColor='grey';
}
const onDrag = () => {
    document.body.style.backgroundColor='aquamarine';
}
const onDragEnd = () => {
    document.body.style.backgroundColor='black';
}
// Event Listener
clrButton.addEventListener('click', onClick);
clrButton.addEventListener('dblclick', onDoubleClick);
clrButton.addEventListener('contextmenu', onRightClick);
clrButton.addEventListener('mousedown', onMouseDown); // click and hold the button
clrButton.addEventListener('mouseup', onMouseUp); // click and hold the button then leave
clrButton.addEventListener('wheel', onMouseWheel); // go mouse pointer over button and scroll
clrButton.addEventListener('mouseover', onMouseOver); // mouse pointer goes over the button(hover)
clrButton.addEventListener('mouseout', onMouseOut); // mouse pointer goes over then out the button
clrButton.addEventListener('dragstart', onDragStart); // click and drag(fires once when dragging starts)
clrButton.addEventListener('drag', onDrag); // triggres when dragging
clrButton.addEventListener('dragend', onDragEnd);