function reverse(str:string): string {
    let result: string=" ";
    for (let i=str.length-1;i>=0;i--){
        result +=str[i];
    }
    return result;
}
console.log(reverse("Arunkumar")); // Output: !tpircSepyT ,olleH