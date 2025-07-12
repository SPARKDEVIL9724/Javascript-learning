const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');

function getData(id, getNextData){
    setTimeout(() =>{
        h3.textContent = `Data: ${id}`;
        if (getNextData){
            getNextData();
        }
    }, 3000);
}

getData(1, () => {
    getData(2, () => {
        getData(3, ()=> {
            getData(4);
        })});
});