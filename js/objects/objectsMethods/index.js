'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
// algo
// 1. create new obj
// 2. iterate keyList ++
// 3. put key/value to the obj
// function buildObject(keysList, valuesList) {
//   const obj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     obj[keysList[index]] = valuesList[index];
//    obj = {...obj, [keysList[index]]: valuesList[index]}
//   }
// }

// function buildObject(keysList, valuesList) {
//   return keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});
// }

// ---test Data
// examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(result);

//input: obj, obj
// output: boolean

// examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(result);

// algo
// 1. get keys, keys2
// 2. if length !== length2 ==> false
// 3. iterate keys1
// 4. compare key1/value1, key2/value2
// 5. if (step 4 === false)==> false

function compareObjects(obj1, obj2) {
  const keys = Object.key(obj1);
  if (keys.length !== Object.key(obj2).length) {
    return false;
  }
  return keys.every(key => obj1[key] === obj2[key]);
}

// ---test Data
// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};
