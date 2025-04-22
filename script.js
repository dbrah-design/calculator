const numberBtn = document.querySelectorAll(".js-number-btn");
const operatorBtn = document.querySelectorAll(".js-operator-btn");
const displayCalc = document.querySelector(".display-calculation");
const equalBtn = document.querySelector(".js-equal-btn");
const clearBtn = document.querySelector(".js-clear-btn");


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

let currentInput = '';
let currentOperation = '';
let previousInput = '';


function appendNumber(number) {
  currentInput += number;
  displayCalc.textContent = `${previousInput} ${currentOperation} ${currentInput}`;
}

function appendOperation(operation) {
  if(currentInput === '') return;
  if(previousInput !== '') {
    operate();
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = '';
  displayCalc.textContent = `${previousInput} ${currentOperation}`;
}

numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
   appendNumber(button.value);
  })
});

operatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
    appendOperation(button.value);
  })
})

function operate() {

  if(previousInput === '' || currentInput === '') return;
  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);
  
  if(currentOperation === '+') {
    result = addNums(prev,current);
   
  } else if(currentOperation === '-') {
    result = subtractNums(prev,current);

  } else if(currentOperation === '*') {
    result = multiplyNums(prev,current);

  } else if(currentOperation === '/') {
    if(current === 0) {
      alert("Cannot divide by zero");
      return;
    }
    result = divideNums(prev,current);

  } else {
    return;
  }
  
  currentInput = result.toString();
  currentOperation = '';
  previousInput = '';
  displayCalc.textContent = currentInput.length > 4 ? currentInput.slice(0,4) : currentInput;
  
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  currentOperation = '';
  displayCalc.textContent = '0';
}

clearBtn.addEventListener("click", clearDisplay);
equalBtn.addEventListener("click",operate);
