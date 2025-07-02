// function defination
function add(num1=10,num2=20){
    return (num1+num2);
    console.log("Addition"); // this statement will not be executed
}

// function call
console.log(add(5,2));
console.log(add(9));
console.log(add());

// IIFE
(function (name){
    console.log("Hello"+name);
})();

// Arrow Fuction
const hello=(name)=>console.log("hello"+name);
const helloWelcome = (name,age) => {
    console.log("hello"+name);
    console.log("age"+age);}