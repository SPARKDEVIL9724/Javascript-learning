const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');

function api(i){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h4.textContent = `Data Returned ${i}`;
            resolve(200);
            // reject('Failure');
        }, 3000);
    });
}

// async keyword --> always returns a promise
// await keyword --> pauses the execution of its surrounding async function until promise is settled
// await keyword can be used inside an async function only

// await api(9); // gives error
async function getData(){
    h3.textContent='getting data 1';
    await api(5);
    // after running api(5) then only the below two statements will execute
    h3.textContent='getting data 2';
    await api(3);
}
// getData();

async function Pokemon(){
    h1.textContent = 'Pokemon';
}

Pokemon();

(async function(){
    h3.textContent='getting data 3';
    await api(9);
    // after running api(5) then only the below two statements will run
    h3.textContent='getting data 4';
    await api(10);
})();