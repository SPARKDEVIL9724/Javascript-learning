const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
Data = 'Bulbasaur'
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        h1.textContent = this.name;
        h2.textContent = this.email;
        h3.textContent = Data;
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
        super.viewData();
    }

    editData(newData){
        Data = newData;
        super.viewData();
    }
}
const Student = new User('Pokemon', 'Pikachu');
Student.viewData();

const admin1 = new Admin('Pokemon', 'Squirtle');
admin1.editData('Charizard');
