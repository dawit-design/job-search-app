const fruits = ["apple", "banana", "orange"];
const veggies = ["cucumber", "radish", "carrot"];

// console.log([...fruits, ...veggies]);

const developer = {
  salary: 100000,
  experience: 4.5, 
  techStack: ["Vue", "HTML", "CSS"],
  doubleSalary(){
    this.salary = this.salary * 2;
  }
};

developer.doubleSalary()
console.log(developer.salary)