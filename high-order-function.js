//map
const usd= [10, 20, 30, 40, 50];
const npr = usd.map(price => price * 140);
console.log(npr);

//filter
const arr= [1,2,3,4,5,6];
const printNum = arr.filter(a => a<4);
console.log(printNum);

//reduce
const numbers = [1,5,7,9,0];
const reducedNum = numbers.reduce((sum, num) => sum + num, 0);
console.log(reducedNum);