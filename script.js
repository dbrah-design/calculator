const calculatorBtn = document.querySelectorAll(".calculator-button");
const displayCalc = document.querySelector(".display-calculation");
const equalSign = document.querySelector(".equal-sign");



function addNums(num1,num2) {
  return num1 + num2;
}

function subtractNums(num1,num2) {
  return num1 - num2;
}

function multiplyNums(num1,num2) {
  return num1 * num2;
}

function divideNums(num1,num2) {
  return num1 / num2;
}

let calculation = "";

calculatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
   calculation += button.value;
   console.log(calculation);
  })
})

function operate() {

  const numbers = calculation.match(/\d+/g);
  let num1 = Number(numbers[0]);
  let num2 = Number(numbers[1]);
  let result;
  if(calculation.includes("+")) {
    result = addNums(num1,num2);
    calculation = "";
  } else if(calculation.includes("-")) {
    result = subtractNums(num1,num2);
    calculation = "";
  } else if(calculation.includes("*")) {
    result = multiplyNums(num1,num2);
    calculation = "";
  } else if(calculation.includes("/")) {
    result = divideNums(num1,num2);
    calculation = "";
  }

  return console.log(result);
}

equalSign.addEventListener("click",operate)




