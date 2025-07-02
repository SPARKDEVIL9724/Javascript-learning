// Step 1
const library=[
    {
        title:"book1",
        author:"writer1",
        status:{
            own:true,
            reading:false,
            read:false
        }
    },
    {
        title:"book1",
        author:"writer1",
        status:{
            own:true,
            reading:false,
            read:false
        }
    },
    {
        title:"book1",
        author:"writer1",
        status:{
            own:true,
            reading:false,
            read:false
        }
    }
];
console.log(library);

// Step 2
library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;
console.log(library);

// Step 3
const {title:firstBook} =library[0];
console.log(firstBook);

// Step 4
const libJson=JSON.stringify(library);
console.log(libJson);