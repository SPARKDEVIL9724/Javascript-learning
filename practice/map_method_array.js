// // map
// const num=[1,2,3,4,5];
// // 1
// const doubleNum = num.map(number => number*2);
// console.log(doubleNum);
// const n =num.map(numb => 'Number '+numb);
// console.log(n);

// // 2
// const doubleNum2=num.map(function(number){
//     return number*2;
// });
// console.log(doubleNum2);

// //using forEach
// doubleNumber=[];
// num.forEach((number) => {
//     doubleNumber.push(number*2);
// });
// console.log(doubleNumber);

// // Chain Map Methods
// const num=[1,2,3,4,5];
// const squareAndDouble = num.map((number) => Math.sqrt(number)).map((sqrt => sqrt*2));
// console.log(squareAndDouble);
// const squareAndDouble2 = num.map(
//     function(number){
//         return Math.sqrt(number);
//     }).map(function(sqrt){
//     return sqrt*2;
// });
// console.log(squareAndDouble2);

// // Chaining Different Methods
// const num=[1,2,3,4,5,6,7,8,9,10];
// const evenDoubled = num.filter((number) => number%2===0).map((even) => even*2);
// console.log(evenDoubled);

// Practice Exercise
const companies=[
    {name:'Conpany One', category:'Finance', start:1981, end:2004 },
    {name:'Conpany Two', category:'Retail', start:1992, end:2008 },
    {name:'Conpany Three', category:'Auto', start:1999, end:2007 },
    {name:'Conpany Four', category:'Retail', start:1989, end:2010 },
    {name:'Conpany Five', category:'Technology', start:2009, end:2014 },
    {name:'Conpany Six', category:'Finance', start:1987, end:2010 },
    {name:'Conpany Seven', category:'Auto', start:1986, end:1996 },
    {name:'Conpany Eight', category:'Technology', start:2011, end:2016 },
    {name:'Conpany Nine', category:'Retail', start:1981, end:1989 },
];

// create an array of comapny names
const companyNames = companies.map(
    (company) => company.name
);
console.log(companyNames);

// create an array with company and category
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,
    };
});
console.log(companyInfo);

// create an array of the length of each company name and years
const companyYears =companies.map((company) =>{
    return {
        name: company.name,
        length: company.end - company.start,
    };
});
console.log(companyYears)

