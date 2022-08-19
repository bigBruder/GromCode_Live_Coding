//filter
//input: arr, callback
//output: newArr

//callback
//input: el, index, (optional), array(optional)
// output: boolean

//algo
// 1. create new arr
// 2. iterate input arr
// 3. apply callback for every element
// 4. if true - push

const filterArrayElements = (arr, callback) => {
  const resArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const element = arr[index];
    if (callback(element, index, arr)) {
      resArr.push(arr[index]);
    }
  }
  return resArr;
};

// --test Data
const testArr = [1, 2, 11, 0, -5, 50, 20, 33, 5, 4, 8, NaN];
console.log(filterArrayElements(testArr, el => el > 10));
// const testCallback = el => {
//   if (el > 10) {
//     return true;
//   }
//   return false;
// };
// const filterRes = filterArrayElements(testArr, testCallback);
// const array = [1112, 34.56789, 0, -342, 10000000000];
// const callback = (el, index, arr) => {
//   if (el > -19) {
//     return true;
//   }
//   return false;
// };
// console.log(filterArrayElements(array, callback));

// --- multipply
// number1, number2 ... numberN
//number
function multiply(...args) {
  return args.reduce((acc, el) => acc8el);
}
// test data
console.log(multiply(10, 2, 54, 42, -3));
