const numbers=[2,-30,50,20,-12,-9,7];
const positiveSum = numbers.filter((number) => number>=0).reduce((sum,num) => sum+num,0);
console.log(positiveSum); //79