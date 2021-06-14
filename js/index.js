"use strict";
// Использовать бинарный поиск, чтобы отгадать загаданное пользователем число от 0 до 100.
// Задавать вопрос с помощью confirm.

binarySearch();

function binarySearch() {
  let fromValue = 0;
  let toValue = 100;
  let middle = 50;

  while (middle > fromValue + 1) {
    if (confirm(`Is it less than ${middle}?`)) {
      toValue = middle - 1;
      middle = Math.floor((fromValue + toValue) / 2);
    } else {
      fromValue = middle;
      middle = Math.floor((fromValue + toValue) / 2);
    }
  }

  if (confirm(`Is it more than ${middle}?`)) {
    alert(`Your value is ${toValue}`);
    return;
  }

  if (middle === fromValue) {
    alert(`Your value is ${middle}`);
    return;
  }

  if (confirm(`Is it more than ${fromValue}?`)) {
    alert(`Your value is ${middle}`);
    return;
  }

  alert(`Your value is ${fromValue}`);
}
//Виктория, 3 рогатки пришлось ставить в конце кода, зато ОНО бинарное получилось до конца
