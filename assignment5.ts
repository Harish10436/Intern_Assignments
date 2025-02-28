// 1. Partial
// Given the following interface:
interface User {
  id: number;
  name: string;
  email: string;
} 
// Define a function updateUser that takes an object of type Partial<User> and updates the user information.
function updateUser(user: Partial<User>){
    return {...user};
}

// 2. Required
// Convert the following UserProfile type to ensure that all properties are mandatory:
interface UserProfile {
  id: number;
  name: string;
  age: number;
}
// Use the appropriate utility type.

type UserRequired = Required<UserProfile>;
const user: UserRequired = {
    id: 123,
    name: "ABC",
    age: 20
};

console.log(user);

// 3. Readonly
// Using the Readonly utility type, define a variable config that ensures the following object cannot be modified:
let config : Readonly<{apiKey:string,timeout:number}> = {
  apiKey: "12345",
  timeout: 5000
};

// config.apiKey = "678"; Cannot do this as it will throw an error

// Given the following interface:
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
};
 
// Create a new type ProductSummary that only includes id, name, and price.
let productSummary : Partial<Product> = {
    id: 123,
    name: "ABC",
    price: 10
};

// 5. Omit
// Using Omit, create a new type UserWithoutEmail that 
// includes all properties from User except email

type UserWithoutEmail = Omit<User, 'email'>;
let userWithoutEmail: UserWithoutEmail = {
    id: 123,
    name: "ABC"
};

// 6. Record
// Create a UserRoles type that maps user IDs (numbers) to role names (strings).
type UserRoles = Record<number, string>;
let userRoles: UserRoles = {
    123: "Admin",
    124: "User"
};

 