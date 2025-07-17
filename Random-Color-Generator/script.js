const containerDiv = document.querySelector('.container');
const displayValue = document.querySelector('.display-value');
const displayColor = document.querySelector('.random-color-display');
const displayRGB = document.querySelector('.rgb-value');
const displayHEX = document.querySelector('.hex-value');

// decimal to hex
function decimalToHex(num){
    const hexcode = { 10:'A' ,11:'B' , 12:'C', 13:'D', 14:'E', 15:'F', };
    let hex = '';
    let i = 0;
    while(i<2){
        const remainder = num%16;
        if(remainder<10){
            hex = remainder + hex;
        }
        else{
            hex = hexcode[remainder] + hex;
        }
        num = Math.floor(num/16);
        i++;
    }
    return hex;
}

// generating a random color
function generateRandomColor(){
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
    const color = [R,G,B];
    displayColor.style.backgroundColor = `rgb(${R},${G},${B})`;
    return color;
}

// generate color button
const generateColor = document.createElement('button');
generateColor.className = 'generate-color';
generateColor.textContent = 'Generate a Random Color';
containerDiv.insertAdjacentElement('beforeend', generateColor);

// events
generateColor.addEventListener('click', () => {
    displayValue.className = 'display-value';
    displayColor.className = 'random-color-display';
    const color = generateRandomColor();
    displayRGB.textContent = `RGB Value: rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    displayRGB.className ='rgb-value value';
    const hexR = decimalToHex(color[0]);
    const hexG = decimalToHex(color[1]);
    const hexB = decimalToHex(color[2]);
    displayHEX.textContent = 'HEX Value: #'+hexR+hexG+hexB;
    displayHEX.className ='hex-value value';
    console.log(`RGB(${color[0]}, ${color[1]}, ${color[2]})`);
    console.log('#'+hexR+hexG+hexB);


})