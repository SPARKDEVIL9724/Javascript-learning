const output = document.querySelector('h1');

const student = {
    name: 'pikachu',
    marks: 99.99,
    // defining function in an object
    printMarks: function () {
        console.log(`marks = ${this.marks}`);
        output.textContent = this.name;
    },
};

student.printMarks(); // call

const employee = {
    calcTax() {
        output.textContent = 'Tax is 10%';
    },
    calcTax2 : function () {
        output.textContent = 'Tax is 20%';
    }
};
employee.calcTax();

const newEmployee ={
    salary: 5000,
};
// setting prototype
newEmployee.__proto__ = employee;
// calling function using prototype object
newEmployee.calcTax2();

const newEmployee2 ={
    salary: 5000,
    calcTax() {
        output.textContent = 'Tax is 30%'
    },
};
// setting prototype
newEmployee2.__proto__ = employee;
// calling function using prototype object
newEmployee2.calcTax();
