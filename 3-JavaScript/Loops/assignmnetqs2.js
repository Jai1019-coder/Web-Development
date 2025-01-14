let num = prompt("Enter a number to count digits");
let count = 0;
while(num >= 1){
    num/=10;
    count++;
}
console.log(`You've entered ${count} digit number`);