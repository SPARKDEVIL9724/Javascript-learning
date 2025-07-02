function calculator(num1, num2, operator){
    let result;
    switch(operator){
        case '+':
            result=`${num1} ${operator} ${num2} =${num1+num2}`;
            break;
        case '-':
            result=`${num1} ${operator} ${num2} =${num1-num2}`;
            break;
        case '*':
            result=`${num1} ${operator} ${num2} =${num1*num2}`;
            break;
        case '/':
            result=`${num1} ${operator} ${num2} =${num1/num2}`;
            break;
        default:
            console.log("Error");
            result="unidentified operator";
    };
    return(result);
}

const num1=10;
const num2=5;
console.log(calculator(num1,num2,'+'));
console.log(calculator(num1,num2,'-'));
console.log(calculator(num1,num2,'*'));
console.log(calculator(num1,num2,'/'));
console.log(calculator(num1,num2,'€'));