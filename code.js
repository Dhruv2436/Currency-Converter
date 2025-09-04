const BASE_URL ="https://v6.exchangerate-api.com/v6/5b7acd254c1e77b8c3d85a2b/pair/";
const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select" );
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const result = document.querySelector(".result");
// for( code in countryList){
//     console.log(code);
// }
for(select of dropdown){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "fromCurr" && currCode==="USD"){
            newOption.selected = true;
        } else if(select.name === "toCurr" && currCode==="INR"){
            newOption.selected = true;
        }
        select.append(newOption);
    }
    if (select.name === "from") select.value = "USD";
    if (select.name === "to")   select.value = "INR";
    
    select.addEventListener("change" ,(evt) =>{
        updateFlag(evt.target);
    });
}

const updateFlag =(element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.parentElement.querySelector("img");
    img.src = newSrc;


}

btn.addEventListener("click", async(evt) =>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input"); 
    let amtval = amount.value;
    if (amtval === "" || amtval <1){
        amtval=1;
        amount.value="1";
    }

    const URL = `${BASE_URL}/${fromCurr.value.toUpperCase()}/${toCurr.value.toUpperCase()}/${amtval}`
    let responce = await fetch(URL);
    let data = await responce.json();
    let rate = data["conversion_rate"];
    let resultt = data["conversion_result"];
    console.log(data);
    msg.innerText = `1 ${fromCurr.value} = ${rate} ${toCurr.value}`;
    result.innerText = `Result : ${resultt}`;
})  