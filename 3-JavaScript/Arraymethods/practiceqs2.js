let list = [85,96,72,46,12,78,93,54,89,63];
let min = list.reduce((output,input) => {
    if(output<input) return output;
    else return input;
});
console.log(min)
console.log(FileSystemDirectoryEntry); 