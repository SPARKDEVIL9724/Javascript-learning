
const people =[
    {
        firstName:'John',
        lastName:'Doe',
        email:'john@gmail.com',
        phone:'1111111111',
        age:30,
    },
    {
        firstName:'Don',
        lastName:'Poo',
        email:'don@gmail.com',
        phone:'2222222222',
        age:25,
    },
    {
        firstName:'Bob',
        lastName:'Spider',
        email:'bob@gmail.com',
        phone:'3333333333',
        age:45,
    },
    {
        firstName:'Sara',
        lastName:'Soe',
        email:'sara@gmail.com',
        phone:'4444444444',
        age:19,
    },
    {
        firstName:'Jose',
        lastName:'Koe',
        email:'jose@gmail.com',
        phone:'55555555555',
        age:23,
    },
];

const youngPeople = people.filter((person) => person.age <= 25).map((young) => {
    return {
        name: young.firstName + ' ' + young.lastName,
        email: young.email,
    };
});
console.log(youngPeople);