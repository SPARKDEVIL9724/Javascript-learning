const output = document.querySelector('h1');

class Parent {
    constructor(Pokemon){
        this.species = 'Pokemon';
        output.textContent = 'Species';
        output.textContent = Pokemon;
    }

    pokemon(){
        output.textContent = 'Pokemon';
    }
}

class Child extends Parent {
    constructor(type){
        super('Pikachu'); // to invoke parent class constructor
        this.type = type;
        // output.textContent = type;
    }

    pikachu(){
        output.textContent = 'Pikachu';
    }

    type(){
        output.textContent = 'Electric';
    }
}

const variable = new Child('Electric');
// variable.pikachu();
// using parent class function through child class
// variable.pokemon();