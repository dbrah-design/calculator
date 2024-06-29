function addNums(num1,num2) {
  return num1 + num2;
}

console.log(addNums(1,2));

function subtractNums(num1,num2) {
  return num1 - num2;
}

console.log(subtractNums(4,2))

function multiplyNums(num1,num2) {
  return num1 * num2;
}

console.log(multiplyNums(2,1))

function divideNums(num1,num2) {
  return num1 / num2;
}

console.log(divideNums(8,2));

function operate() {
  const num = 1;
  const num2 = 2;
  const operator = multiplyNums(num,num2);

  return operator;
}

console.log(operate());

const calculatorBtn = document.querySelector(".calculator-button");
const displayCalc = document.querySelector(".display-calculation");


function displayCalculation() {
  displayCalc.textContent = calculatorBtn.textContent;
}

calculatorBtn.addEventListener("click",displayCalculation);