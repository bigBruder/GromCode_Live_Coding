const numbersList = [5, 0, 8, 10, -4, 50, 220];
console.log(numbersList);

// ---task 1
// input: callback
// output: array

// calback
// input: element, index(optional), array (optional)
// output: new element

// option 1
// const mapRes = numbersList.map(( el, index) => (index > 2 ? el * el :el));

//option 2
//const mapRes = numbersList.map(el => el * el);
// console.log(mapRes);
//input: callback
//output: newarr

// --- task 2
// input: callback
// output: undefined

//calback
//input: element
// output: undefined

// const newArr = [];
// const forEachRes = numbersList.forEach(el => {
//   newArr.push(el);
// });
// console.log(numbersList);
// console.log(newArr);

// --- task3 
// const forEachRes = numbersList.forEach(el => {
//     if (el > 0) {
//       console.log(el);
//     }
//   });

//reduce
const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];


//input: callback(acumulator, array)
//output: sum of numbers

// callback
//input: acc, el, index(optional), array(optional)

transactions.reduce((acc, el){
    console.log(acc);
    console.log(el);
     return 7
}, (initialValue(accumulator):100));

// --- task5

const reduceSum = transactions.reduce((sum, el) => (el > 100 ? sum + el : sum), 0);
console.log(reduceSum);




// --- task 6
// filter -відфільтрувати!
// map - видозмінити!
// reduce - зібрати до купки!

// якщо потрбіно все і одразу то робимо тре методи,бо читабельність і якість коду вище в приорітитеті ніж місткість менша!