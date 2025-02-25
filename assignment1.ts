// Exercise 1
let num:number[] = [1,2,3,4,5];
let str:string[] = ["a","b","c"];
let bool:boolean[] = [true,false];
let mixed:Array<number|string>=[1,"a"];
console.log(num);
console.log(str);
console.log(bool);
console.log(mixed);

// Exercise 2
let fruits:String[] = ["apple","banana","mango"];
fruits.push("grapes");
fruits.shift();
fruits.splice(2,0,"pineapple");

console.log(fruits);

//Exercise 3
let numbers: number[] = [10, 20, 30, 40, 50, 60];
let doubled:number[] = numbers.map((num) => num * 2);
let filtered:number[] = numbers.filter((num) => num > 50);
var sum = 0;
for(let i = 0; i < numbers.length; ++i){
    sum += numbers[i];
}
//using reduce we can also calculate sum
//let sum = numbers.reduce((a,b) => a+b,0);
console.log("Doubled numbers:", doubled);;
console.log("Filtered numbers:", filtered);
console.log("Sum:", sum);

//Exercise 4
let values: number[] = [10, 20, 30, 40, 50];
let greater:number[] = values.filter(x=>x>25);
let first = greater[0];
let index = values.indexOf(40);

console.log("Value greater than 25:", first);
console.log("Index of 40:", index);

// Exercise 5: Sorting an Array
// Sort the following array in ascending and descending order.
 
let scores: number[] = [55, 23, 87, 12, 99, 38];
let ascending: number[] = scores.sort();
let descending: number[] = scores.sort((a,b) => (b - a));
console.log("Ascending order:", ascending);
console.log("Descending order:", descending);

//Exercise 6: Tuple Types
// Create a tuple that holds the following information about a student:

let student: [string, number, boolean] = ["John", 21, true];
student[1] = 22;
console.log(student);

// Exercise 7: Working with includes() and some()
let roles: string[] = ["User", "Editor", "Admin", "Moderator"];
let exists: boolean = roles.includes("Admin");
console.log(exists);
let hasAdmin: boolean = roles.some(role => role.startsWith("Super"));
console.log(hasAdmin);

// Exercise 8: Flattening an Array
let nestedArray: any[] = [1, [2, 3], [4, [5, 6]]];
let flattenedArray: number[] = nestedArray.flat(Infinity) as number[];
console.log(flattenedArray);

// Exercise 9: Merging and Removing Duplicates
let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5, 6];
let mergedArray: number[] = arr1.concat(arr2);
//Set removes the duplicates from the array
let uniqueArray: number[] = [...new Set(mergedArray)];
console.log(uniqueArray);

//Exercise 10 interfaces
interface Employee {
    name: string;
    age: number;
    position: string;
}

let employees: Employee[] = [
    { name: "A", age: 21, position: "Developer" },
    { name: "B", age: 22, position: "Manager" },
    { name: "C", age: 31, position: "Clerk" },
    { name: "D", age: 42, position: "Intern" }
];

let filteredEmployees: Employee[] = employees.filter(emp => emp.age > 30);
console.log(filteredEmployees);


