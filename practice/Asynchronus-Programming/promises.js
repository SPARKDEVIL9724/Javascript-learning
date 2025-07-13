const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');

// promises -> it is a solution to callback hell
// -> it is an eventual completion of task 
// -> it is an 'object' in JavaScript
// states of promise --> pending, fulfilled,, rejected

let promise = new Promise((resolve, reject) => {
    // state -> pending -> result: undefined
    h1.textContent = 'Promise';

    //state -> fulfilled -> result: reolve message
    resolve('Promise fullfilled');

    // state -> rejected -> result: error with reject message
    reject('Promise Rejected');
});

function getData(id, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h2.textContent = `Data: ${id}`;
        }, 4000);
        resolve('Success');
    });
}

getData(500);

// .then() -> promise.then((resolve) => {})
// .catch() -> promise.catch((err) => {})

function getPromise(){
    return new Promise((resolve, reject) => {
      h3.textContent = 'Promise2';
    //   resolve('Success');
    reject('Rejected');
    });
}

const promise2 = getPromise();
promise2.then((res) => {
    h4.textContent = `promise fullfilles ${res}`;
});
promise2.catch((err) => {
    h4.textContent = `Promise Rejected ${err}`;
});
// Normally two promises resolved together run at the same time
// Promise chaining
// --> second promise runs after first promise is resolved
// --> slightly better than callback hell
function asyncFunc(i){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.textContent = `Data Returned ${i}`;
            i++;
            resolve('Success');
            // reject('Failure');
        }, 3000);
    });
}
function asyncFunc2(i){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h3.textContent = `Data2 Returned ${i}`;
            i++;
            resolve('Success');
            // reject('Failure');
        }, 3000);
    });
}

// asyncFunc().then((res) => {
//     h4.textContent = `Promise ${res}`;
//     asyncFunc2().then((res) => {
//         h2.textContent = `Promise ${res}`;
//     });
// });

// promise chainig simplified -> most used
asyncFunc(1)
.then((res) => {
    return asyncFunc(2);
})
.then((res) => {
    return asyncFunc(3);
})
.then((res) => {
    h4.textContent = `Promise ${res}`;
});