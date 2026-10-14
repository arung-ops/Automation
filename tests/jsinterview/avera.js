function averagenumber(arr) {
    const sum=arr.reduce ((acc, num) => acc + num, 0);
    const average=sum/arr.le    ngth;
    return average;
}
console.log(averagenumber([1, 2, 3, 4, 5]));