
// 🍀js0208 calculator

document
.getElementById("result")
.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("result").value = eval(
      document.getElementById("result").value
    );
  }
});



// 🍀MDD Calculator
//  = (52주 최고가 - 현재주가) / 52주 최고가 
// (a-b) / a *100 = c

// const result = wkHighE.value

const nameE = document.querySelector('.MDD .name');
const wkHighE = document.querySelector('.MDD .wkHigh');
const nowE = document.querySelector('.MDD .now');
const resultE = document.querySelector('.MDD .result');

const goB = document.querySelector('.MDD .go');
const clearB =document.querySelector('.MDD .clear');

let result =0;
goB.addEventListener('click',()=>{
    console.log(nowE.value)
    console.log(typeof nowE.value)
    console.log(wkHighE.value)
    console.log(typeof wkHighE.value)


    result = (wkHighE.value - nowE.value) / wkHighE.value *100

    console.log(result)
    console.log(typeof result)

    
    // 🦄 isNaN(result)
    if (isNaN(result)) {
        resultE.innerHTML += `<div>error : put the number please</div>`;
        
    } else if (result <= 0) {     
        resultE.innerHTML +=   `<div>error : already highest price</div>`;
        
    }
    else {
        resultE.innerHTML += `<div> ${nameE.value}  - ${parseFloat(result).toFixed(2)}% decline</div>`;
        console.log(result)        
    }    
});


// nowE.addEventListener('input',()=>{
//     console.log(nowE.value)

//     result = (wkHighE.value - nowE.value) / wkHighE.value *100

    
//     // 🦄 isNaN(result)
//     if (isNaN(result)) {
//         resultE.innerHTML = `error : put the number please`;
        
//     } else {
//         resultE.innerHTML = `전 고점대비 - ${result}% 하락`;
        
//     }
    
//     wkHighE.value  = "";
//     nowE.value ="";
// });


clearB.addEventListener('click',()=>{
  wkHighE.value  = "";
    nowE.value ="";
    nameE.value ="";
});



// 🍀limit order calculater 

const nameE_limit = document.querySelector('.limit .name');

const target_percentE = document.querySelector('.limit .target-percent');
const now_averageE = document.querySelector('.limit .now-average');
// const target_percentE = document.querySelector('.limit .target-percent');
// const now_averageE = document.querySelector('.limit .now-average');

const resultE_limitE = document.querySelector('.limit .result');
const goB_limit = document.querySelector('.limit .go');
const clearB_limit =document.querySelector('.limit .clear');

let result_limit = 0;
console.log(typeof result_limit)

goB_limit.addEventListener('click',()=>{

    console.log(now_averageE.value)
    console.log(target_percentE.value)
    console.log(parseFloat(now_averageE.value))
    console.log(typeof parseFloat(now_averageE.value))
    console.log(typeof target_percentE.value)
    
    // 목표 가격 = 현재가격 + 현재가격 /100 * 목표 percent
    result_limit = parseFloat(now_averageE.value) + (parseFloat(now_averageE.value)/100 * parseFloat(target_percentE.value));

    console.log(result_limit)
    console.log(typeof result_limit)
    console.log(parseFloat(result_limit).toFixed(2))

    // 🦄 isNaN(result)
    if (isNaN(result_limit)) {
        resultE_limitE.innerHTML += `<div>error : put the number please</div>`;
        
    } else {
        resultE_limitE.innerHTML += `<div> buy or sell limit order 목표가격 ${nameE_limit.value}  ${parseFloat(result_limit).toFixed(2)} $ </div>`;
        console.log(result_limit)        
    }    
});

clearB_limit.addEventListener('click',()=>{
    target_percentE.value  = "";
    now_averageE.value ="";
    nameE_limit.value ="";
});