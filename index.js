let bill = document.getElementById('amount');
let billNum = bill.value;
let tip = document.getElementById('percent');
let tipNum = tip.value/100;
let total = document.getElementById('total');
let totalNum = 0;
let tipAmount = document.getElementById('tip');
let tipAmountNum= 0;

let calculate = document.getElementById('calculate')

bill.addEventListener("input", function(){
  billNum = bill.value;
  console.log(billNum);
})

tip.addEventListener("input", function(){
  tipNum = tip.value/100;
  console.log(tipNum);
})

calculate.addEventListener("click", function(){
  totalNum= (billNum * (1 + tipNum)).toFixed(2);
  tipAmountNum = (billNum * (1 + tipNum) - billNum).toFixed(2);
  total.innerHTML = totalNum;
  tipAmount.innerHTML = tipAmountNum;
  console.log(billNum);
  console.log(tipNum);
  console.log(totalNum);
  console.log(tipAmountNum);
})
