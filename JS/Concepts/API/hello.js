const URL = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URL);
// console.log(promise);

const fact = document.getElementById("fact");
const btn = document.getElementById("btn");



// let getFacts = async () =>{
//     let responce =  await fetch(URL);
//     console.log(responce);
//     console.log("Status : ",responce.status);

//     let data = await responce.json();
//     console.log(data);
//     // let random = Math.floor(Math.random() * 5);
//     // fact.innerText = data[random].text;
//     fact.innerText = data[0].text;
// }


function get(){
    fetch(URL).then((res)=>{
        return res.json();
    }).then((data)=>{
        fact.innerText = data[0].text;
    })
}

btn.addEventListener("click",()=>{
    get();
})