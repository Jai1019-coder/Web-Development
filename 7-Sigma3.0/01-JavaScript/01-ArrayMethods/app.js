// let arr = [1,2,3,4,5,6,7];
// arr.forEach(element => {
//     console.log(element);
// });  
let arr = [{
    name: 'John',
    age: 30
},
{
    name: 'Jane',
    age: 25,
},
{
    name: 'Jim',    
    age: 35,
}]
arr.forEach(student => {
    console.log(`${student.name} is ${student.age} years old`);
})