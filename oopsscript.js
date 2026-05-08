// Q-1. Create a Student Class

class Student {

    displayDetails() {
        console.log("Name: " + this.name);
        console.log("Roll No: " + this.rollNo);
        console.log("Marks: " + this.marks);
    }

    checkResult() {
        if (this.marks >= 40) {
            console.log("Result: Pass");
        } else {
            console.log("Result: Fail");
        }

        // Gap between records
        console.log("-------------------");
    }
}

// First Student
let student1 = new Student();

student1.name = "Deepak Kumar";
student1.rollNo = 101;
student1.marks = 78;

student1.displayDetails();
student1.checkResult();

// Second Student
let student2 = new Student();

student2.name = "Kumar";
student2.rollNo = 102;
student2.marks = 90;

student2.displayDetails();
student2.checkResult();

// ------------------------------------------------------------------------------------
// Q2. Inheritance

// Parent Class
class Employee {
    constructor(empId, empName, salary) {
        this.empId = empId;
        this.empName = empName;
        this.salary = salary;
    }

    displayEmployee() {
        console.log("Employee ID: " + this.empId);
        console.log("Employee Name: " + this.empName);
        console.log("Salary: " + this.salary);
    }
}

// Child Class
class Manager extends Employee {
    constructor(empId, empName, salary, department) {
        super(empId, empName, salary);
        this.department = department;
    }

    displayManager() {
        console.log("Department: " + this.department);
    }
}

// Creating Object
let manager1 = new Manager(101, "Rahul Sharma", 50000, "IT");

// Calling Methods
manager1.displayEmployee();
manager1.displayManager();

// ------------------------------------------------------------------------------------
// Q3. Encapsulation

class BankAccount {
    // Private Variable
    #balance = 0;

    // Deposit Method
    deposit(amount) {
        this.#balance += amount;
        console.log(amount + " deposited successfully");
    }

    // Withdraw Method
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(amount + " withdrawn successfully");
        } else {
            console.log("Insufficient Balance");
        }
    }

    // Get Balance Method
    getBalance() {
        console.log("Current Balance: " + this.#balance);
    }
}

// Creating Object
let account1 = new BankAccount();

// Calling Methods
account1.deposit(5000);
account1.withdraw(2000);
account1.getBalance();

account1.withdraw(4000);

// ------------------------------------------------------------------------------------
// Q4. Constructor & Object Creation

class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    displayDetails() {
        console.log("Brand: " + this.brand);
        console.log("Model: " + this.model);
        console.log("Price: " + this.price);
        console.log("-------------------");
    }
}

// Creating Objects
let car1 = new Car("Toyota", "Fortuner", 4500000);
let car2 = new Car("Hyundai", "Creta", 1800000);
let car3 = new Car("Honda", "City", 1500000);

// Displaying Details
car1.displayDetails();
car2.displayDetails();
car3.displayDetails();


// ------------------------------------------------------------------------------------
// Part B – Regular Expressions (RegEx)
// Q5. Validate Email Address

let email = "Hi";

let pattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

if(pattern.test(email)){
    console.log("Valid Email");
}
else{
    console.log("Invalid Email");
}


// ------------------------------------------------------------------------------------
// Q6. Password Validation


let password = "Test@123";

let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

if(pattern.test(password)){
    console.log("Valid Password");
}
else{
    console.log("Invalid Password");
}

// ------------------------------------------------------------------------------------
// Q7. Mobile Number Validation

let mobile = "9876543210";

let pattern = /^[6-9]\d{9}$/;

if(pattern.test(mobile)){
    console.log("Valid Mobile Number");
}
else{
    console.log("Invalid Mobile Number");
}


// ------------------------------------------------------------------------------------
// Q8. Extract Numbers from String

let str = "Order123Amount450";

let numbers = str.match(/\d+/g);

console.log(numbers);

// ------------------------------------------------------------------------------------
// Q9. Replace Spaces with *

let str = "JavaScript Regular Expression";
let result = str.replace(/\s+/g, "*");

console.log(result);


// ------------------------------------------------------------------------------------
// Part C – Exception Handling
// Q10. Divide by Zero Exception

let num1 = 20;
let num2 = 0;

try {
    if(num2 == 0){
        throw "Cannot divide by zero";
    }

    let result = num1 / num2;
    console.log("Result: " + result);
}
catch(error){
    console.log("Error: " + error);
}
finally{
    console.log("Program Finished");
}

// ------------------------------------------------------------------------------------
// Q11. Invalid Age Exception

function checkAge(age){

    try{
        if(age < 18){
            throw "Not Eligible";
        }

        console.log("Eligible to Vote");
    }
    catch(error){
        console.log(error);
    }
}

checkAge(16);



// ------------------------------------------------------------------------------------
// Q12. Custom Exception

function checkUsername(username){

    try{
        if(username.length < 5){
            throw "Invalid Username";
        }

        console.log("Valid Username");
    }
    catch(error){
        console.log(error);
    }
}

checkUsername("Pallavi");

// ------------------------------------------------------------------------------------
// Q13. Multiple Catch Scenarios

let num1 = 20;
let num2 = 0;
let choice = "division";

try {

    if(isNaN(num1) || isNaN(num2)){
        throw "Invalid Input";
    }

    if(choice == "addition"){
        console.log("Addition: " + (num1 + num2));
    }

    else if(choice == "division"){

        if(num2 == 0){
            throw "Divide by Zero Error";
        }

        console.log("Division: " + (num1 / num2));
    }

}
catch(error){
    console.log("Error: " + error);
}