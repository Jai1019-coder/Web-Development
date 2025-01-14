let n = prompt("Enter number to calculate factorial"), factorial = 1;
for (let i = 0; i < n; i++) {
    factorial = factorial*(n-i);
}
console.log(factorial);