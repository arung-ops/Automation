let name : string = "John Doe";
console.log(`Hello, ${name}! Welcome to the TypeScript interview.`);
let age : number = 30;
console.log(`You are ${age} years old.`);
let isEmployed : boolean = true;
if (isEmployed) {
    console.log("You are currently employed.");
} else {
    console.log("You are currently unemployed.");
}
let skills : string[] = ["JavaScript", "TypeScript", "Node.js"];
console.log("Your skills include:");
skills.forEach((skill) => {
    console.log(`- ${skill}`);
}); 
let person : { name: string; age: number; isEmployed: boolean; skills: string[] } = {
    name: name,
    age: age,
    isEmployed: isEmployed,
    skills: skills
};
console.log("Person object:", person);
let greet = (person: { name: string; age: number; isEmployed: boolean; skills: string[] }) => {
    console.log(`Hello, ${person.name}! You are ${person.age} years old and currently ${person.isEmployed ? "employed" : "unemployed"}.`);
    console.log("Your skills include:");





    person.skills.forEach((skill) => {
        console.log(`- ${skill}`);
    });
}       
let address : { street: string; city: string; country: string } = {
    street: "123 Main St",
    city: "Anytown",    


    country: "USA"
};
console.log("Address object:", address);