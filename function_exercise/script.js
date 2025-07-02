//Exercise 1
function getCelcius(fTemp){
    let cTemp;
    cTemp=(fTemp-32)*(5/9);
    return `The temperature is ${cTemp} \xB0C`
}

const getCT= (fTemp) => `The temperature is ${(fTemp-32)*(5/9)} \xB0C`;

console.log(getCelcius(32));
console.log(getCT(32));

//Exercise 2
const minMax= (arr) => `Min:${Math.min(...arr)} Max:${Math.max(...arr)}`;
const num =[12,3,4,5,6,0,9,7];
console.log(minMax(arr));

//Exercise 3
const l=10;
const b=5;
(function(length,width){
    const area =length*width;
    console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`);
})(l,b);
