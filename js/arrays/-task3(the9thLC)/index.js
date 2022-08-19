//map

// input: callback
// output: array

// calback
// input: element, index(optional), array (optional)
// output: new element

//algo
// 1. create new arr
// 2. iterate input arr
// 3. apply callback for every element
// 4. push every transformed element

function mapArrayElements(arr, callback) {
  const resArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const element = callback(arr[index], index, arr);
    resArr.push(element);
  }
  return resArr;
}

// --test Data
const testArr = [1, 2, 3, -10, NaN];
const testCallback = el => el * el;
console.log(mapArrayElements(testArr, testCallback));
