const output = document.querySelector('h1');

class Car {
    constructor(brand){
        output.textContent = 'constructor';
        // if no brand is specified then it is aken as undefined
        this.brand = brand;
        output.textContent = brand;
    }

    start(){
        output.textContent = 'start';
    }

    stop(){
        output.textContent = 'stop';
    }

    setBrand(brand){
        // jo this ke saath likha hai woh object ka property hai
        this.brand = brand;
    }
}

const fortuner = new Car();
output.textContent = typeof(fortuner); //object
fortuner.start();
fortuner.setBrand('Tata');
output.textContent = fortuner.brand;

const farari = new Car();
farari.stop();

const rangeRover = new Car('Tata');