function sum(...number){
    let total=0;
    for (let num of number){
        total+=num;
    }
    return total;
}
console.log(sum(1,2,3));
console.log(sum(1,6,8,9,3));
console.log(sum(8,9,0,45,3));
console.log(sum(1,2,5,7,8,3));
console.log(sum(1,2,9,8,9,0,4,5,6));