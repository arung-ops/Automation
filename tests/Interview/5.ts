function largestnu(numbers:number[]): number {
    if (numbers.length ===0){
        throw new Error ("Array is Empty ");
    }
    let large=numbers[0];
    for (const num of numbers){
        if (num>large){
            large=num
        }
    }
    return large;
}
console.log(largestnu([1,2,3,4,5])); // Output: 5