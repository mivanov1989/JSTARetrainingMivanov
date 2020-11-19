//Task1
const arr = [2, 3, 4, 5];
let resultFor = 1;
let resultWhile = 1;
let j = 0;

for (let i = 0; i < arr.length; i++) {
  resultFor *= arr[i];
}

while (j < arr.length) {
  resultWhile *= arr[j];
  j++;
}

console.log(`resultFor = ${resultFor}`);
console.log(`resultWhile = ${resultWhile}`);

//Task2
for (let i = 0; i <= 15; i++) {
  !(i % 2) ? console.log(`${i} is even`) : console.log(`${i} is odd`);
}

//Task3
function randArray(n) {
  return Array.apply(null, Array(n)).map((el, index) =>
    Math.floor(Math.random() * 500)
  );
}

console.log(`Result array is ${randArray(5)}`);

//Task4
let number = parseInt(prompt("Please enter an integer number"));
let degree = parseInt(prompt("Please enter an integer degree"));

function raiseToDegree(n, d) {
  return Math.pow(n, d);
}

console.log(
  `Number ${number} raised to degree ${degree} equals ${raiseToDegree(
    number,
    degree
  )}`
);

//Task5
function findMin() {
  return Math.min(...arguments);
}

console.log(
  `Minimum number among the arguments is ${findMin(
    1,
    -5,
    8,
    99,
    -6,
    2.3,
    84,
    0,
    0,
    0.5
  )}`
);

//Task6
function findUnique(arr) {
  let sortedArr = Array.from(arr).sort();
  let counter = 0;
  sortedArr.forEach((el, i) => {
    if (i <= sortedArr.length - 2 && el === sortedArr[i + 1]) {
      counter++;
    }
  });
  return !Boolean(counter > 0);
}

console.log(findUnique([2, 3, 4, 55, 6, 7, 8]));

//Task7
function lastElement(arr, n) {
  let resultArray = [];
  for (
    let i = Array.from(arr).length - 1;
    i >= Array.from(arr).length - n;
    i--
  ) {
    console.log("inside");
    resultArray.push(Array.from(arr)[i]);
  }
  return resultArray;
}

console.log(`Last elements: ${lastElement([2, 5, 8, 77, 3, 6, 9, 8], 3)}`);

//Task8
function capitalizeIt(str) {
  let array = String(str).trim().split(" ");
  let resultArray = array.map((el) => {
    return el.toString().charAt(0).toUpperCase() + el.slice(1);
  });
  return resultArray;
}

console.log(`Result string: ${capitalizeIt("I love java script")}`);
