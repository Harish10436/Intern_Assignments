// Create an abstract class Shape with:
 
// An abstract method calculateArea(): number
// A constructor that takes color as a property
// A method getColor(): string that returns the color
// Then, create two subclasses Circle and Rectangle that implement calculateArea().
 
// Task
// Implement Shape, Circle, and Rectangle
// Create instances and call the methods

abstract class Shape {
    color: string;
    abstract calculateArea(): number;
    constructor(color: string){
        this.color = color;
    }

    getColor(): string{
        return this.color;
    }
}

class Circle extends Shape{
    radius: number;
    constructor(color: string, radius: number){
        super(color);
        this.radius = radius;
    }

    calculateArea(): number{
        return (3.14) * this.radius * this.radius;
    }
}

class Rectangle extends Shape{
    width: number;
    height: number;
    constructor(color: string, width: number, height: number){
        super(color);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number{
        return this.width * this.height;
    }
}

let circle = new Circle("red", 7);
console.log(circle.calculateArea());
console.log(circle.getColor());

let rectangle = new Rectangle("green", 5, 6);
console.log(rectangle.getColor());
console.log(rectangle.calculateArea());

// Exercise 2: Implementing an Interface
// Create an interface Vehicle with:
 
// A property speed: number
// A method move(): void
// Then, implement Vehicle in two classes: Car and Bicycle.
 
// Task
// Implement Vehicle, Car, and Bicycle
// Create instances and call the move() method

interface Vehicle{
    speed: number;
    move(): void;
}

class Car implements Vehicle{
    speed: number;
    constructor(speed: number){
        this.speed = speed;
    }

    move(): void{
        console.log("Car is moving at speed of " + this.speed + " km/hr");
    }
}

class Bicycle implements Vehicle{
    speed: number;
    constructor(speed: number){
        this.speed = speed;
    }

    move(): void{
        console.log("Bicycle is moving at speed of " + this.speed + " km/hr");
    }
}

let car = new Car(60);
console.log(car.move());

let bicycle = new Bicycle(30);
console.log(bicycle.move());

// Exercise 3: Combining Abstract Class and Interface
// Create an interface Flyable with:
 
// A method fly(): void
// Create an abstract class Bird with:
 
// A property name: string
// A method eat(): void
// Then, create two classes Eagle and Sparrow that extend Bird and implement Flyable.
 
// Task
// Implement Bird and Flyable
// Create Eagle and Sparrow and call eat() and fly()

abstract class Bird{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    eat(): void{
        console.log("Bird is eating");
    }
}

interface Flyable{
    fly(): void;
}

class Eagle extends Bird implements Flyable{
    constructor(name: string){
        super(name);
    }
    fly(): void{
        console.log("Eagle is flying");
    }
}

class Sparrow extends Bird implements Flyable{
    constructor(name: string){
        super(name);
    }
    fly(): void{
        console.log("Sparrow is flying");
    }
}

let eagle = new Eagle("Eagle");
console.log(eagle.eat());
console.log(eagle.fly());

let sparrow = new Sparrow("Sparrow");
console.log(sparrow.eat());
console.log(sparrow.fly());

// Exercise 4: Interface Inheritance
// Create two interfaces:
 
// Person with name: string and speak(): void
// Employee (extends Person) with salary: number and work(): void
// Create a class Developer that implements Employee.
 
// Task
// Implement Person, Employee, and Developer
// Create an instance and call speak() and work()

interface Person{
    name: string;
    speak(): void;
}

interface Employee extends Person{
    salary: number;
    work(): void;
}

class Developer implements Employee{
    name: string;
    salary: number;
    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary;
    }
    speak(): void{
        console.log("Developer is speaking");
    }
    work(): void{
        console.log("Developer is working");
    }
}

let developer = new Developer("ABC", 20000);
console.log(developer.speak());
console.log(developer.work());  

// =========================================================== 
// ===========================================================

// Exercise 1: Abstract Class for Banking System
// Create an abstract class BankAccount with:
 
// Protected properties: accountNumber, balance
// Constructor to initialize accountNumber and balance
// Methods:
// deposit(amount: number): void (increases balance)
// Abstract method withdraw(amount: number): boolean (returns true if successful, false otherwise)
// Method getBalance(): number
// Then, create two subclasses SavingsAccount and CheckingAccount that:
 
// Implement withdraw()
// SavingsAccount should have a withdrawal limit
// CheckingAccount should allow overdraft up to a certain limit
// Tasks
// Implement BankAccount, SavingsAccount, and CheckingAccount
// Create instances and test deposit/withdraw functions

abstract class BankAccount{
    protected accountNumber: number;
    protected balance: number;
    constructor(accountNumber: number, balance: number){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void{
        this.balance += amount;
    }

    abstract withdraw(amount: number): boolean;

    getBalance(): number{
        return this.balance;
    }
}

class SavingsAccount extends BankAccount{
    withdrawalLimit: number;
    constructor(accountNumber: number, balance: number, withdrawalLimit: number){
        super(accountNumber, balance);
        this.withdrawalLimit = withdrawalLimit;
    }

    withdraw(amount: number): boolean{
        if(amount <= this.withdrawalLimit){
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

class CheckingsAccount extends BankAccount{
    overdraftLimit: number;
    constructor(accountNumber: number, balance: number, overdraftLimit: number){
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): boolean{
        if(amount <= (this.balance + this.overdraftLimit)){
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

let savingsAccount = new SavingsAccount(12345, 1000, 2000);
console.log(savingsAccount.getBalance());
savingsAccount.deposit(1000);
console.log(savingsAccount.getBalance());
savingsAccount.withdraw(2000);
console.log(savingsAccount.getBalance());

let checkingsAccount = new CheckingsAccount(12345, 1000, 2000);
console.log(checkingsAccount.getBalance());
checkingsAccount.deposit(1000);
console.log(checkingsAccount.getBalance());
checkingsAccount.withdraw(2000);
console.log(checkingsAccount.getBalance());

// Exercise 2: Interface for Payment System
// Create an interface PaymentMethod with:
 
// A method pay(amount: number): void
// A method refund(amount: number): void
// Then, create three classes CreditCard, DebitCard, and UPI that:
 
// Implement PaymentMethod
// Each class should have a balance and implement pay() and refund()
// Tasks
// Implement PaymentMethod, CreditCard, DebitCard, and UPI
// Create instances and simulate payments & refunds

interface PaymentMethod{
    pay(amount: number): void;
    refund(amount: number): void;
}

class CreditCard implements PaymentMethod{
    balance: number;
    constructor(balance: number){
        this.balance = balance;
    }

    pay(amount: number): void{
        this.balance -= amount;
    }

    refund(amount: number): void{
        this.balance += amount;
    }
}

class DebitCard implements PaymentMethod{
    balance: number;
    constructor(balance: number){
        this.balance = balance;
    }

    pay(amount: number): void{
        this.balance -= amount;
    }

    refund(amount: number): void{
        this.balance += amount;
    }
}

class UPI implements PaymentMethod{
    balance: number;
    constructor(balance: number){
        this.balance = balance;
    }

    pay(amount: number): void{
        this.balance -= amount;
    }

    refund(amount: number): void{
        this.balance += amount;
    }
}

let creditCard = new CreditCard(1000);
console.log(creditCard.balance);
creditCard.pay(100);
console.log(creditCard.balance);
creditCard.refund(200);
console.log(creditCard.balance);

let debitCard = new DebitCard(1000);
console.log(debitCard.balance);
debitCard.pay(100);
console.log(debitCard.balance);
debitCard.refund(200);
console.log(debitCard.balance);

let upi = new UPI(1000);
console.log(upi.balance);
upi.pay(100);
console.log(upi.balance);
upi.refund(200);
console.log(upi.balance);

// Exercise 3: Combining Abstract Class and Interface
// Create:
 
// Abstract class PaymentGateway with:
 
// A method processPayment(amount: number): void
// A method processRefund(amount: number): void
// An abstract method validateTransaction(transactionId: string): boolean
// Interface SecurePayment with:
 
// Method authenticateUser(userId: string): boolean
// Then, create a class PayPal that:
 
// Extends PaymentGateway
// Implements SecurePayment
// Implements validateTransaction() and authenticateUser()
// Tasks
// Implement PaymentGateway, SecurePayment, and PayPal
// Create an instance of PayPal and test methods

abstract class PaymentGateway{
    processPayment(amount: number): void{
        console.log("Payment processed successfully");
    }

    processRefund(amount: number): void{
        console.log("Refund processed successfully");
    }

    abstract validateTransaction(transactionId: string): boolean;
}

interface SecurePayment{
    authenticateUser(userId: string): boolean;
}

class PayPal extends PaymentGateway implements SecurePayment{
    authenticateUser(userId: string): boolean{
        return true;
    }

    validateTransaction(transactionId: string): boolean{
        return true;
    }
}

let paypal = new PayPal();
console.log(paypal.authenticateUser("ABC"));
console.log(paypal.validateTransaction("123"));

// Exercise 4: Multiple Interface Implementation
// Create:
 
// Interface Loan with applyForLoan(amount: number): void
// Interface Insurance with applyForInsurance(policy: string): void
// Then, create a class Customer that:
 
// Implements Loan and Insurance
// Stores loan and insurance details in properties
// Tasks
// Implement Loan, Insurance, and Customer
// Create an instance of Customer and test loan & insurance applications

interface Loan{
    applyForLoan(amount: number): void;
}

interface Insurance{
    applyForInsurance(policy: string): void;
}

class Customer implements Loan, Insurance{
    loanDetails: string;
    insuranceDetails: string;
    applyForLoan(amount: number): void{
        this.loanDetails = "Loan applied for amount " + amount;
    }

    applyForInsurance(policy: string): void{
        this.insuranceDetails = "Insurance applied for policy " + policy;
    }
}

let customer = new Customer();
customer.applyForLoan(1000);
console.log(customer.loanDetails);
customer.applyForInsurance("Health");
console.log(customer.insuranceDetails);
