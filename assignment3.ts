//Q1
let userNames: string = "John Doe";
let age: number = 25;
let isStudent: boolean = true;

//Q2
function add(a:number,b:number):number{
    return a+b;
}
console.log(add(1,2));

//Q3
function greet(username: string, message?: string): string {
    if(message === undefined){
        message = "Hello";
    }
    return `${message}, ${username}!`;
}

//Q4
function displayId(id: number | string): void {
    console.log(`ID: ${id}`);
}
//fix the above using union

//Q5
let numbers: number[] = [10,20,30];
let person: [string,number] = ["Alice",30];

//Q6
interface Person{
    name: string;
    age: number;
    email: string;
};

let user_a: Person = {
    name: "John Doe",
    age: 25,
    email: "xyz@gmail.com"
};

//Q7
// id,name,role
type Employee = {
    id: number;
    name: string;
    role: string;
};

const employee: Employee = {
    id: 1,
    name: "John Doe",
    role: "Designer"
};

//Q8
enum Colour{
    "Red",
    "Green",
    "Blue"
};

let favouriteColour: Colour = Colour.Green;
console.log(favouriteColour);

//Q9
interface User_a{
    name: string;
    age: number;
    email: string;
};

type partial_User_a = Partial<User_a>;
const user_a1: partial_User_a = {name:"ABC",age:25};
console.log(user_a1); 

//Q10
class Car{
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayCarInfo(): void{
        console.log(`${this.year} ${this.brand} (${this.model})`);
    }
};

const myCar = new Car("Toyota","Corolla",2020);
myCar.displayCarInfo();
