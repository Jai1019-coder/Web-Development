let url = "https://catfact.ninja/fact";
async function getapicall(url){
    let res = await fetch(url);
    console.log(res);
    let data = await res.json();
    console.log(data.fact)
}
try{
    getapicall(url);
}catch(e){
    console.log("Error - ", e);
}