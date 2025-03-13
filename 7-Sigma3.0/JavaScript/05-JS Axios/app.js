let btn = document.querySelector("button");
let url = "https://catfact.ninja/fact";
btn.addEventListener("click", async () =>{
    let facts = await getRandomCatFacts(url);
    let p = document.querySelector("#result");
    p.innerText = facts;
})
async function getRandomCatFacts(url){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        return "No Fact available."
    }
}