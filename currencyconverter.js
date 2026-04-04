const BASE_URL = "https://api.exchangerate.host/convert";
let dropdown=document.querySelectorAll(".dropdown select");
let container=document.querySelector(".select-container");
let btn=document.querySelector("button");
let amount=document.querySelector(".amount input")
let msg=document.querySelector(".msg");

let fromCurr=dropdown[0];
let toCurr=dropdown[1];
 


for (let select of dropdown){
    for (let countcode in countryList){
    let option= document.createElement("option");
    option.innerText=countcode.toUpperCase();;
    option.value=countcode.toUpperCase();;
    select.append(option);
    }


let img=document.querySelectorAll("img");
function fromupdateflag(selectElement){
    // let img = selectElement.parentElement.querySelector("img");
    let selectedCurrency=selectElement.value;
    let countryCode=countryList[selectedCurrency];
    img[0].src=`https://flagsapi.com/${countryCode.toUpperCase()}/flat/64.png`;
     
     


};
function toupdateflag(selectElement){
   
    let selectedCurrency=selectElement.value;
    let countryCode=countryList[selectedCurrency];
    img[1].src=`https://flagsapi.com/${countryCode.toUpperCase()}/flat/64.png`;
     
     


};
dropdown[0].addEventListener("change", (e) => {
  fromupdateflag(e.target);
});

// Second dropdown → To flag
dropdown[1].addEventListener("change", (e) => {
  toupdateflag(e.target);
});



async function updateExchangeRate(){
  const from = fromCurr.value.toUpperCase();
const to = toCurr.value.toUpperCase();
  let amt=parseFloat(amount.value);
  if(isNaN (amt)||amt<=0){
    amt=1
    amount.value="1"
  }
  const API_KEY = "XXXXXXXXXX"
   const URL = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amt}&access_key=${API_KEY}`;


   try{let response=await fetch(URL);
 let data= await response.json();
  




 

 msg.innerText = `${amt} ${from} = ${data.result.toFixed(2)} ${to}`;
  
 
 catch(err){
  console.log("failed to fetch api error=", err)
}

 


};








btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});
