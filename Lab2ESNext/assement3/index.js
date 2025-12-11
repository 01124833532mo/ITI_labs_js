// index.js

// 1. Import everything from both modules
import { Employee, departments } from './employee.js';
import { addEmployee, findEmployeeByName, increaseSalary } from './employeeOps.js';

// 2. Create a few employees and store them in an array
let employees = [];

let emp1 = new Employee("mohamed", "hamdy", 30, 50000);
let emp2 = new Employee("ahmed", "hamdy", 25, 60000);
let emp3 = new Employee("mahmoud", "hamdy", 28, 55000);

addEmployee(employees, emp1, emp2, emp3);

// 3. Print all employees’ info on the Document (not console)
let container = document.createElement('div');
container.innerHTML = '<h2>Employee List</h2><ul id="emp-list"></ul>';
document.body.appendChild(container);

let list = document.getElementById('emp-list');

employees.forEach(emp => {
    let li = document.createElement('li');
    li.textContent = `${emp.getFullName()}, Age: ${emp.age}, Salary: $${emp.salary}`;
    list.appendChild(li);
});

