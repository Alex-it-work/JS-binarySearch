"use strict";
// Использовать бинарный поиск, чтобы отгадать загаданное пользователем число от 0 до 100.
// Задавать вопрос с помощью confirm.

const userInputValue = askUserToInputValue();

try {
  valueValidator(userInputValue);
  binarySearch(userInputValue);
} catch (error) {
  if (error instanceof TypeError) {
    alert("Input a number value pls");
  }
  if (error instanceof RangeError) {
    alert("Input finite, integer value 0...100 pls");
  }
}

function askUserToInputValue() {
  return Number(prompt("Hello! \n Input any value 0...100 pls:"));
}

function valueValidator(value) {
  if (isNaN(value)) {
    throw new TypeError("The input value must be a number ");
  }
  if (value < 0 || value > 100) {
    throw new RangeError("The input value must be from 0 to 100");
  }
  return value;
}

function binarySearch(value) {
  let fromValue = 0;
  let toValue = 100;
  let middle = 50;
  while (middle !== value) {
    if (confirm(`Is it less than ${middle}?`)) {
      toValue = middle - 1;
      middle = Math.floor((fromValue + toValue) / 2);
    } else {
      fromValue = middle + 1;
      middle = Math.floor((fromValue + toValue) / 2);
    }
  }
  alert(`Your value is ${middle}`);
}
