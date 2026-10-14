function large(numbers :string[]): string[] {
    return [... new Set(numbers)];
}
console.log(large(["apple", "banana", "apple", "orange", "banana"])); // Output: ["apple", "banana", "orange"]