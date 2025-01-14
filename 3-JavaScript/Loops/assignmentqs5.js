let arr = [14,45,78,28,99,28,54], l = arr.length-1;
let num = 0;
for(let i = 0; i < l-1; i++){
    if(arr[i] > arr[i+1]){
        num = arr[i];
    }
    else {
        num = arr[i+1];
    }
}
console.log(`Greates number in the list is ${num}`);