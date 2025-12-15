// employeeOps.js

// 1. Add employee(s) to an array
export function addEmployee(employeeArray, employees) {
    employeeArray.push(...employees); 
}

// 2. Find employee by full name
export function findEmployeeByName(employeeArray, fullName) {
    return employeeArray.find(emp =>
        emp.getFullName().toLowerCase() === fullName.toLowerCase()
    );
}

// 3. Increase salary by percentage
export function increaseSalary(employee, percentage) {
    if (percentage > 0) {
        employee.salary += (employee.salary * percentage) / 100;
    }
}