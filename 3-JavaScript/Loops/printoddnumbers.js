let n = prompt("Enter number upto which you want odd number : ");
for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
        continue;
    }
    else{
        console.log(i);
    }
}