// //filter
// const num=[1,2,3,4,5,6,7,8,9,10,11,13,12,14];
// // 1
// const even=num.filter(function(number){
//     return number%2===0;
// });
// console.log(even);
// // 2
// const sEven=num.filter(number => number%2===0);
// console.log(sEven);
// // using forEach
// const fEven=[];
// num.forEach(function(number){
//     if(number%2===0){
//         fEven.push(number);
//     }
// });
// console.log(fEven);

// Practice Exercise
const companies=[
    {name:'Conpany One', category:'Finance', start:1981, end:2004, },
    {name:'Conpany Two', category:'Retail', start:1992, end:2008, },
    {name:'Conpany Three', category:'Auto', start:1999, end:2007, },
    {name:'Conpany Four', category:'Retail', start:1989, end:2010, },
    {name:'Conpany Five', category:'Technology', start:2009, end:2014, },
    {name:'Conpany Six', category:'Finance', start:1987, end:2010, },
    {name:'Conpany Seven', category:'Auto', start:1986, end:1996, },
    {name:'Conpany Eight', category:'Technology', start:2011, end:2016, },
    {name:'Conpany Nine', category:'Retail', start:1981, end:1989, },
];

// get only retail companies
const retail=companies.filter(function(company){
    return company.category==='Retail';
});
console.log(retail);

// get companies startend in or after 1980 and ended in or before 2005
const earlyCompanies = companies.filter(
    (company) => company.start >= 1980 && company.end <= 2005
);
console.log(earlyCompanies);

// get companies that lasted 10 years or more
const longCompanies = companies.filter(
    (company) => company.end - company.start >=10
);
console.log(longCompanies);