function getSenseOfLife() {
  return 42;
}

// ----test data

// option1
const result = getSenseOfLife();
console.log(result);
// option2
console.log(getSenseOfLife());

function getSquared(num) {
  return num * num;
}

// ----test data

console.log(getSquared(10));

function sum(a, b) {
  return a + b;
}

// ----test data

console.log(sum('10', '-5'));

function printMessage(age) {
  return 'I am ' + age + ' years old';
}

// ----test data 4s

console.log(printMessage(34));

// ----test data 5

// function sumFunc(from,to){
//     let res = 0;
//     for(let index = from; index <= to; index++){
//         res += index;
//     }
//     return res
// }

// console.log(sumFunc(5, 7));
// console.log(sumFunc(-5, 5));

function sum(from, to) {
  // put your code here
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  let res = 0;
  for (let index = firstFrom; index <= firstTo; index++) {
    res += index;
  }
  let res2 = 0;
  for (let i = secondFrom; i <= secondTo; i++) {
    res2 += i;
  }

  return res > res2;
}

// ----test data 6
console.log(compareSums(-5, 5, -10, 5));

const mult = (firstNum, secondNum) => firstNum * secondNum;

// ----test data 7

console.log(mult(2, 5));
console.log(mult(-10, 5));
console.log(mult(2, Infinity));

const getMagicNumber = () => 17;

// ----test data 8

console.log(getMagicNumber());
