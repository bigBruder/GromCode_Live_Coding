// pop
// input: array;
// output: number;
const numbersList1 = [1, 2, 3, 4, 5];
let lastChar = numbersList1.pop();
console.log(lastChar);
console.log(numbersList1);

//push
// input: array
// output: newLength
const numbersList2 = [1, 2, 3, 4, 5];
let newLength = numbersList2.push(6);
console.log(numbersList2);
console.log(newLength);

//shift
// input: none
// output:first char of array

const numbersList3 = [1, 2, 3, 4, 5];
let Array = numbersList3.shift();
console.log(Array);

// filter
//input: array
//output:new transformated array
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
const newArray = anotherNumbersList.filter(el => el > 5);
console.log(newArray);

//filterCallback
// input: element
// output:boolean

// option 1
const filterRes = anotherNumberList.filter(function filterCallback(element) {
    return element > 5;
  });
// option 2
anotherNumbersList.filter(el => el > 5);

function sum(from,to, resolver){
    let sumResult = 0;
    for(let index = from; index <= to; index++){
        sumResult += index;
    }
   resolver(sumResult)
}

// -- test data
function func(number){
    console.log(number);
}
console.log(function sum(1, 5, 10))