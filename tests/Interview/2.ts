let name: any = "John Doe";
console.log(`Hello, ${name}! Welcome to the TypeScript interview.`);
let age: any = 30;
console.log(`You are ${age} years old.`);
console.log(`You are ${age} years old.`);
console.log(name.toUpperCase()); 
console.log(name.toLowerCase()); // This will cause an error because 'any' type does not have a method 'toUpperCase'


let value: unknown = 2;
if (typeof value === "string") {
    console.log(value.toUpperCase()); // This is safe because we checked the type   
} else {
    console.log("Value is not a string.");
}


//union type
let unionValue: string | number = "Hello";
console.log(unionValue.toUpperCase()); // This is safe because unionValue is a string


let id: string | number ;
id = 123; // valid
id = "abc"; 
console.log(`ID: ${id}`); // This is safe because id can be either a string or a number


//Intersection type
type Person = {
    name: string;
    age: number;
};
type Employee = {
    employeeId: number;
};
type EmployeePerson = Person & Employee;
const employee: EmployeePerson = {
    name: "Jane Doe",
    age: 28,    

    employeeId: 456
};
console.log("Employee object:", employee);