h1 = document.querySelector('h1');

function changeColor(color, delay, nextColor) {
    setTimeout(() => {
        h1.style.color = color;
        h1.innerHTML = color;
        if(nextColor) nextColor();
    }, delay);
}
changeColor('green',1000, () => {
    changeColor('yellow', 1000, () => {
        changeColor('blue', 1000, () => {
            changeColor('red',1000)
        });
    });
});