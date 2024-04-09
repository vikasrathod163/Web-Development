let prices = [250,645,300,900,50];
console.log(prices);

// for(let i = 0; i < prices.length; i++){
//     let offer = prices[i] * (10/100);
//     prices[i] = prices[i] - offer;
// }

// console.log(prices);

let afterOffer = [];

for(let el of prices){
    let offer = el * (10/100);
    afterOffer.push(el-offer);
}

for(let el of afterOffer){
    console.log("After offer : ",el);
}