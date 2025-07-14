const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
const btn = document.querySelector('button');
// fetch api --> fetch() method is used to fetch a resource/data
// --> provides an interfce for fetching resources

const url = 'https://dogapi.dog/api/v2/facts';
// const url = 'https://cat-fact.herokuapp.com/facts';
// const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m';
// AJAX -> asynchronus JS and XML
// JSON -> JavaScript Object Notation

// .json() method is used to return a second promise 
// that resolves with the result of parsing the response body text as JSON
// input is JSON , output given is JS objcet


// using async await
async function getFacts() {
    // h1.textContent = 'promise';
    response = await fetch(url)
    console.log(response);
    const objData = await response.json();
    console.log(objData);
    console.log(objData.data[0]);
    console.log(objData.data[0].attributes);
    h2.textContent = objData.data[0].attributes.body;
    // let promise = fetch(url);
}

// using promise chaining
function getFacts2(){
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((objdata) => {
        console.log(objdata);
        h3.textContent = objdata.data[0].attributes.body;
    })
}

btn.addEventListener('click', getFacts2);
btn.addEventListener('dblclick', getFacts);