function table(n) {
    for(let i = 1; i <= 10; i++){
        console.log(n*i);
    }
}
function sigma(n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum+i;
    }
    return sum;
}