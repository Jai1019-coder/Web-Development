h1 = document.querySelector('h1');


// function changeColor(color, delay, nextColor) {
//     setTimeout(() => {
//         h1.style.color = color;
//         h1.innerHTML = color;
//         if(nextColor) nextColor();
//     }, delay);
// }
// changeColor('green',1000, () => {
//     changeColor('yellow', 1000, () => {
//         changeColor('blue', 1000, () => {
//             changeColor('red',1000)
//         });
//     });
// });
function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color changed successfully");
            console.log(`Color changed to  ${color}!`);
        }, delay);
    })
}
async function demo(){
    await changeColor('red', 1000);
    await changeColor('blue', 1000);
    await changeColor('green', 1000);
    await changeColor('yellow', 1000);
    changeColor('red', 1000);
}