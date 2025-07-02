// Reduce 
const num =[1,2,3,4,5,6,7,8,9,10];
const sum=num.reduce(function(accumulator,currentValue){
    return accumulator+currentValue;
},0);
console.log(sum);
const sum2= num.reduce((acc,cur) => acc+cur ,0); //55
console.log(sum2);
const sum3= num.reduce((acc,cur) => acc+cur ,10); //65
console.log(sum3);

// using for loop
const sum4 = () => {
    let acc = 0;
    for(const cur of num){
        acc = acc + cur;
    }
    return acc;
};
console.log(sum4());

// practice exercise
const cart=[
    { id: 1, name:'Product 1', price:130 },
    { id: 2, name:'Product 2', price:150 },
    { id: 3, name:'Product 3', price:200 },
];

const total = cart.reduce((acc,product) => acc + product.price ,0);