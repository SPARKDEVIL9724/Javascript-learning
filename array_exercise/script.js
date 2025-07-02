// Exercise 1
const arr=[1,2,3,4,5];

//method 1
arr.reverse();
arr.push(0);
arr.unshift(6);
console.log(arr);

//method 2
arr.push(6);
arr.reverse();
arr.push(0);
console.log(arr);

///////////////////////

//Exercise 2
const arr1=[1,2,3,4,5];
const arr2=[5,6,7,8,9,10];
const arr3= new Array;
arr3=arr1.slice(0);
arr2.splice(0,1);
arr3.concat(arr2);
console.log(arr3);
