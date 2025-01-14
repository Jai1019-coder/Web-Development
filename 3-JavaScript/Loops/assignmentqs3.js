let num = prompt("Enter number to get sum of digits"), sum = 0;
while(num>0){
    sum = sum+(num%10);
    num = Math.floor(num/10);
}
console.log(`Sum of all digits is ${sum}.`);