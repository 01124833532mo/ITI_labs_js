 //    --U have Array Of Employees Each Emp has properties(Name,Age,Salary,Age,Dep) 
    //part one
    const employees = [
        { Name: "mohamed", Age: 30, Salary: 50000, Dep: "HR" },
        { Name: "hamdy", Age: 25, Salary: 60000, Dep: "IT" },
        { Name: "ali", Age: 35, Salary: 70000, Dep: "Finance" },
        { Name: "ashraf", Age: 28, Salary: 55000, Dep: "IT" },
        { Name: "donia", Age: 32, Salary: 65000, Dep: "HR" }
    ]

    // //Q1: Create a function that returns another function that Take Emp and Return it’s Name 
    // function getNameFunction() {
    //     return function(employees) {
    //         return employees.Name
    //     }
    // }
    // let temp = getNameFunction()
    // console.log(temp(employees[0]))

    // // Q2: Create a counter function that increases every time it’s called.  

    // function counter (){

    //     let count = 0

    //     return function () {
    //            return ++count 

    //       }

    // }
    // let res = counter()
    // console.log(res())
    //  console.log(res())

    //  console.log(res())


// : Create a function that tracks how many times a button is clicked each Time Clicked To 
// change Body Background.  
    // let button = document.createElement("button")
    button.textContent = "Click hena"
    document.body.appendChild(button)
    let clickCounter = 0
    button.addEventListener("click", function() {
        clickCounter++
        if(clickCounter%2===0){
            document.body.style.backgroundColor="red"
        }
        else{
            document.body.style.backgroundColor="black"
        }

        console.log(`counter of clicked is ${clickCounter}`)
     
    })




// Q4: Create a closure that adds a fixed number to any number.
    // function addFixedNumber(fixedNumber) {
    //     return function(number) {
    //         return fixedNumber + number
    //     }
    // }
    // let res = addFixedNumber(5)
    // console.log(res(10)) 

//   Q5: Create a closure that keeps track of how many employees have been 
// added 
    function employeeTracker(employe) {
        employees.push(employe)
        let count = employees.length
        return function() {

            return count
        }
    }
    let emp1 = { Name: "sara", Age: 29, Salary: 72000, Dep: "Marketing" }
    let emp2 = { Name: "ali", Age: 27, Salary: 68000, Dep: "Sales" }
    let tracker1 = employeeTracker(emp1)
    console.log(tracker1())
    let tracker2 = employeeTracker(emp2)
    console.log(tracker2())
  

    // Q6: Create a closure that Takea Bonus percentage and applies it To Emp Salary.  
    // function applyBonus(bonusPercentage) {
    //     return function(employee) {
    //         let bonusAmount = (employee.Salary * bonusPercentage) / 100
    //         return employee.Salary + bonusAmount
    //     }
    // }
    // let bonus = applyBonus(10)
    // console.log(bonus(employees[0]))
    // console.log(bonus(employees[1]))

    // Create a closure that remembers a department name and returns a 
//greeting. 

//  function remember (deptname){
//     return ()=>{
//         console.log(`welcome to ${deptname}`)
//     }
//  }

//  let res = remember("jjjjjj")
//  let res2=remember("lllll")
//  res()
//  res2()


//Part Two: 
//Q1: Use map to get an array of employee names. 
// let employeeNames = employees.map(emp => emp.Name)
// console.log(employeeNames)

//Q2: Use filter to get only employees who earn more than 4500. 
// let employeewhoernedmorethan4500 =  employees.filter(e=>e.Salary>4500)
// console.log(employeewhoernedmorethan4500)

//Q3: Use reduce to calculate the total Salaries. 
// let totalSalaries = employees.reduce((sum, emp) => sum + emp.Salary, 0)
// console.log(totalSalaries)

//Q4: Create a pure function that increases an employee salary by 10%. 

// function incresesalary (emp){
//     let newemp= emp
//     return function(){
//             newemp.Salary +=emp.Salary *0.1
//             return newemp
//     }

// }

// let updatedemp= incresesalary(employees[0])
// console.log(employees[0])
// console.log("after updating ")

// console.log(updatedemp())



//Q5: Add a new employee to EmpArray immutably(without changing  the original use map).

// let arra2= employees.map((e)=>{
//     return e
// })
//     arra2.push({ Name: "mohamed", Age: 30, Salary: 50000, Dep: "HR" })

//     console.log(employees.length)

//     console.log("after updating")
//     console.log(arra2)




//Q7: Filter employees by department using a reusable curried function. 
    // function filterByDepartment(department) {
    //     return function(employees) {
    //         return employees.filter(emp => emp.Dep === department)
    //     }
    // }
    // let filterIT = filterByDepartment("IT")
    // let itEmployees = filterIT(employees)
    // console.log(itEmployees)

    //Q8: Use map to update salaries (+5%) without modifying the original. 

    // let arry2 = employees.map((e)=>{
    //     return e
    // })

    // arry2.map((e)=>{
    //     e.Salary+=e.Salary + (0.05)*e.Salary
    // })

    // console.log(arry2)



// // Q6: Write a higher-order function applyBonus(fn). 
//     function applyBonus(fn) {
//         return function(employee, bonusPercentage) {
//             let bonusAmount = (employee.Salary * bonusPercentage) / 100
//             return fn(employee.Salary + bonusAmount)
//         }
//     }
//     let bonusFunction = applyBonus(function(newSalary) {
//         return newSalary
//     })
//     console.log(bonusFunction(employees[0], 10))
    








    

