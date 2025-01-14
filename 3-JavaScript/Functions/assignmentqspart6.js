 let str = "abcdabcdeffggghhh";
 function filter(str){
    let str2 = "";
    for(let i = 0; i < str.length; i++){
        if(str2.indexOf(str[i]) == -1){
            str2+=str[i];
        }
    }
    console.log(str2);
 }
 filter(str);
let country = ["Bharat","Israle","Russia","China","United States of America"];
let longestname = function(arr){
    let count1 = 0, count2 = 0, str = "";
    for (let i = 1; i < arr.length; i++) {
        count2 = country[i].length;
        count1 = country[i-1].length;
        if(count2>count1){
            str = country[i];
        }
        else{
            str = country[i-1];
        }
    }
    return(str);
}
let start = 100, end = 999;
function random(start, end){
    let num = Math.floor(Math.random()*999)+100;
    console.log(num);
}
let sqr = (a,b) => (a ** b);let arr = [1,28,25,28,89,69,18,25];
let num = 28;
function getelements(arr, num) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>num){
            console.log(arr[i])
        }
    }
    return arr;
}
console.log(getelements(arr,num));