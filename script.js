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

calculatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.value);
  })
})

function operate() {
  const num = 1;
  const num2 = 2;
  const operator = multiplyNums(num,num2);

  return operator;
}




