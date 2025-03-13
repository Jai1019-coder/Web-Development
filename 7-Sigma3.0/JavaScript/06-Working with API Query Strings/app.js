let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{
    let country = document.querySelector("#country").value.toLowerCase();
    let arr = await getUniversity(country);
    show(arr);
})
async function getUniversity(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(e){
        return [];
    }
}
function show(arr){
    let table = document.querySelector("#countryinfo");
    let thead = document.createElement("thead");
    let trow = document.createElement("tr");
    let tdata1 = document.createElement("td");
    tdata1.innerHTML = "University Name";
    let tdata2 = document.createElement("td");
    tdata2.innerHTML = "State-Province";
    trow.appendChild(tdata1);
    trow.appendChild(tdata2);
    thead.appendChild(trow);
    table.appendChild(thead);
    for(let i = 0; i < arr.length; i++){
        let tableRow = document.createElement("tr");
        let tableData1 = document.createElement("td");
        tableData1.innerHTML = arr[i].name;
        tableRow.appendChild(tableData1);
        let tableData2 = document.createElement("td");
        tableData2.innerHTML = arr[i]["state-province"];
        tableRow.appendChild(tableData2);
        table.appendChild(tableRow);
    }
    table.style.border = "2px solid black";
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
}