function frequencynumber (arr){

    const count={};

    for (const num of arr){
        count[num] = (count[num] || 0) + 1;

    }
    return count;

}
console.log(frequencynumber([1, 2, 2, 3, 3, 3]));
