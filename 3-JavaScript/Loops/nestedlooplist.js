let stulist = [["Jai", 408, 95],["Govind", 409, 92],["Arya", 410, 90]]
for (let i = 0; i < stulist.length; i++) {
    console.log(`This is student ${stulist[i][0]}`);
    for (let j = 0; j < stulist[i].length; j++) {
        console.log(stulist[i][j]);
    }
}