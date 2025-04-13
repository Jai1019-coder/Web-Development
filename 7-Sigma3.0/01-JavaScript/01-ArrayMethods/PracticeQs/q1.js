let brr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let isMultiple10 = brr.every((num) => num%10==0);
// console.log(isMultiple10);
let min = brr.reduce((min,num)=>num<min?num:min);
console.log(min);