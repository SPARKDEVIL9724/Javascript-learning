// JSON Functions
// JSON string is used to send data to the server
// from server data is given out in JSON string
const num={
    one:1,
    two:2,
    three:3
};

// to convert to JSON string
const numJSON=JSON.stringify(num); // num can be an array also
console.log(numJSON);

// to convert from JSON string to JS object/array
const numObject=JSON.parse(numJSON);
console.log(numObject);