let n = prompt("Enter number upto which you want even number : ");
for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
    else{
        continue;
    }
}