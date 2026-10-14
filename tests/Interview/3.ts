class  Login {
   public name: string;
   private salary : number;
   protected age : number;
   constructor(name: string, salary: number, age: number) {
       this.name = name;
       this.salary = salary;
       this.age = age;
       console.log(`Employee ${this.name} created with salary ${this.salary} and age ${this.age}.`);
       const emp=new login("John Doe", 50000, 30);
   console.log(emp.name); // Accessible
}