const BASE_URL = "https://open.er-api.com/v6/latest/";

let amount = document.getElementById("amt");
let fromFlag = document.getElementById("flag-1");
let toFlag = document.getElementById("flag-2");
let fromCurr = document.getElementById("from-curr");
let toCurr = document.getElementById("to-curr");
const msg = document.querySelector(".msg");

const dropdowns = document.querySelectorAll(".options select");

for (let select of dropdowns) {
  for (let c_code in countryList) {
    let newEl = document.createElement("option");
    newEl.innerText = c_code;
    newEl.value = c_code;

    if (select.name === "from" && c_code === "USD") {
      newEl.selected = "selected";
    }
    if (select.name === "to" && c_code === "INR") {
      newEl.selected = "selected";
    }
    select.append(newEl);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amtVal = parseFloat(amount.value);
  if (isNaN(amtVal) || amtVal < 1) {
    amtVal = 0;
    amount.value = "0";
  }

  const URL = `${BASE_URL}${fromCurr.value.toUpperCase()}`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data.rates[toCurr.value.toUpperCase()];

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
