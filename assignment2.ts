//Q1
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let combined = arr1.concat(arr2);
console.log(combined);

//Q2
let names1 = ["Alice", "Bob"];
let names2 = ["Charlie", "David"];
let names3 = ["Eve", "Frank"];
let allNames = names1.concat(names2,names3);
console.log(allNames);

//Q3
//Error will be shown below as arr3 expects a boolean value but arr4 is a string
// let arr3 = [true, false];
// let arr4 = ["Yes", "No"];
// let arr5 = arr3.concat(arr4, [1, 2, 3]);

//Q4
// Given the following array:
 
let numbers = [10, 20, 30, 40, 50];
// Use the copyWithin() method to replace the first 
// two elements with the last two elements of the array.
let copy = numbers.copyWithin(0,3);
console.log(copy);

//Q5
// What will be the output of the following code?
 
// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// fruits.copyWithin(1, 3, 5);
// console.log(fruits);

//Output: ["apple", "date", "elderberry", "date", "elderberry"]

//Q6
// Given:
 
// let arr = [1, 2, 3, 4, 5, 6];
// Use copyWithin() to copy elements starting 
// from index 2 and place them at index 0.

let copy1 = arr1.copyWithin(0,2);
console.log(copy1);

//Q7
// Given the following array:
 
let numbers2 = [2, 4, 6, 8, 10];
// Use the every() method to check if 
// all elements in the array are even numbers.

let check2 = numbers2.every(x => x%2 == 0);
console.log(check2);

//Q8
// What will be the output of the following code?
 
// let words = ["apple", "banana", "avocado"];
// let result = words.every(word => word.startsWith("a"));
// console.log(result);
// Output: false

//Q9
// Write a TypeScript function that takes an array of numbers
// as input and returns true if all numbers in the array are positive. 
// Use the every() method inside the function.

let numbers1 = [1,2,3,4,5];
let check = numbers1.every(x => x > 0);

//Q10
let arr = [1, 2, 3, 4, 5];
// Use the fill() method to replace all elements with 0

arr1.fill(0,0);
console.log(arr);

//Q11
// What will be the output of the following code?
 
// let arr = ["A", "B", "C", "D", "E"];
// arr.fill("X", 1, 4);
// console.log(arr);
// Output: ["A", "X", "X", "X", "E"];

//Q12
// Use the fill() method to update only 
// the last three elements of the following array with "done".
let status1 = ["pending", "pending", "pending", "pending", "pending"];
status1.fill("done",2);
console.log(status1);