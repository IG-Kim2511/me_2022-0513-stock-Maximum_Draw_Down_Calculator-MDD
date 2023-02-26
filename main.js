

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
        
    } 
    // 최고점, 현재가격을 바꿔서 입력한때,  계산값이 달라짐... 그래서 이 코드 넣음
    else if (result <= 0) {     
        resultE.innerHTML +=   `<div>error : already highest price</div>`;
        
    }
    else {
        resultE.innerHTML += `<div> ${nameE.value}  : ${parseFloat(result).toFixed(2)}% </div>`;
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


// 🍀🍀QQQ가격으로 TQQQ손절가격 구하기 (순서)

// 🍀1. 손절or익절 목표 퍼센트 Percent calculater (목표 가격 입력해서 얻는)

const nameE_target_percent = document.querySelector('.target-percent-container .name');

const target_priceE = document.querySelector('.target-percent-container .target-price');
const now_priceE = document.querySelector('.target-percent-container .now-price');
// const target_percentE = document.querySelector('.limit .target-percent');
// const now_averageE = document.querySelector('.limit .now-average');

const resultE_target_percentE = document.querySelector('.target-percent-container .result');
const goB_target_price = document.querySelector('.target-percent-container .go');
const clearB_target_price =document.querySelector('.target-percent-container .clear');

let result_target_price = 0;

goB_target_price.addEventListener('click',()=>{
     
    //  b는 a에서 몇퍼센트 감소한것인가?
    // ((a - b) / a) * 100%
    // ((now_priceE - target_priceE) / now_priceE) * 100%

    result_target_price =  (-(( parseFloat(now_priceE.value) -  parseFloat(target_priceE.value)) /  parseFloat(now_priceE.value)) * 100);


    // 🦄 isNaN(result)
    if (isNaN(result_target_price)) {
        resultE_target_percentE.innerHTML += `<div>error : put the number please</div>`;
        
    } else {
        resultE_target_percentE.innerHTML += `<div>손절or익절 목표 퍼센트: ${nameE_target_percent.value}  ${parseFloat(result_target_price).toFixed(2)} % </div>`;
        console.log(result_target_price)        
    }    
});

clearB_target_price.addEventListener('click',()=>{
    target_priceE.value  = "";
    now_priceE.value ="";
    nameE_target_percent.value ="";
});



// 🍀2. 손절or익절 목표 가격 Price calculater (목표 %입력해서 얻는)

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
        resultE_limitE.innerHTML += `<div>손절or익절 목표가격: ${nameE_limit.value}  ${parseFloat(result_limit).toFixed(2)} $ </div>`;
        console.log(result_limit)        
    }    
});

clearB_limit.addEventListener('click',()=>{
    target_percentE.value  = "";
    now_averageE.value ="";
    nameE_limit.value ="";
});

// 🍀 손절or익절 목표가격 calculater (목표 %입력해서 얻는)


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


// 🍀RS calculater 

const RS_nameE = document.querySelector('.RS .name');
const RS_index = document.querySelector('.RS .index');
const RS_stock = document.querySelector('.RS .stock');
const RS_resultE = document.querySelector('.RS .result');

const RS_goB = document.querySelector('.RS .go');
const RS_clearB =document.querySelector('.RS .clear');

let result_RS =0;
RS_goB.addEventListener('click',()=>{
  
    result_RS = RS_index.value/ RS_stock.value

    console.log(result_RS)
    console.log(typeof result_RS)

    
    // 🦄 isNaN(result)
    if (isNaN(result_RS)) {
        RS_resultE.innerHTML += `<div>error : put the number please</div>`;
        
    } else if (result_RS <= 0) {     
        RS_resultE.innerHTML +=   `<div>error : already highest price</div>`;
        
    }
    else {
        RS_resultE.innerHTML += `<div> ${RS_nameE.value} RS:  ${parseFloat(result_RS).toFixed(2)}</div>`;
        console.log(result_RS)        
    }    
});



