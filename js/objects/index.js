// algo
// 1. take key and value from the obj
// 2.  record key like value for the id and put that object into array
// 3. sort by increase age of customers

// const getCustomersList = customers =>
//   Object.entries(customers)
//     .map(([id, obj]) => ({ ...obj, ...obj.customers, id }))
//     .sort((a, b) => a.age - b.age);

// const customers = {
//   'customer-id-1': {
//     name: 'William',
//     age: 54,
//   },
//   'customer-id-2': {
//     name: 'Tom',
//     age: 17,
//   },
// };

// // --- testData
// console.log(getCustomersList(customers));

// input: object
// output: array of objects

// algo
// 1. get array of key-value - entries - [[key1, value1], [key2, value2]]
// 2. iterate array of entries - on every step create new obj
// 3. sort array

//Good Andrew
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);

//Anna
// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(arr => ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };

//Draft solution
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(entry => {
//       console.log('entry is', entry);
// const obj = {};
// Object.assign(obj, { id: entry[0]});
// return Object.assign(obj, entry[1]);
//   return {id: entry[0], ...entry[1]};
// })
// .sort((a, b) => a.age - b.age);

//vitalli
// Bad
// 1. don't use shift
// 2. bad naming
// 3. redundant variable

// const getCustomersList = obj => {
//   return Object.entries(obj)
//   .map(arr => {
//     const idObj = { id: arr[0] };
//     return {...arr[1], idObj};
//   })
//  .sort((a, b) => a.age - b.age);
// };

//Evgen

// const getCustomersList = customers =>
//   Object.keys(customers)
//     .reduce((resultArray, key) => {
//       resultArray.push({ id: key, ...customers[key] });
//       return resultArray;
//     }, [])
//     .sort((a, b) => a.age - b.age);

// const getCustomersList = customers => {
//   return Object.entries(customers)
//     .reduce((acc, [id, obj]) => {
//       acc.push({ id, ...obj });
//       return acc;
//     }, [])
//     .sort((a, b) => a.age - b.age);
// };

const obj = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 20,
  },
  'customer-id-3': {
    name: 'Bob',
    age: 17,
  },
  'customer-id-4': {
    name: 'John',
    age: '22',
  },
  'customer-id-5': {
    name: 'Oscar',
    age: undefined,
  },
  'customer-id-6': {
    name: 'Ann',
    age: null,
  },
  'customer-id-7': {},
  'customer-id-8': {
    name: 'Jim',
    age: NaN,
  },
};

const getCustomersList = obj => {
  return Object.keys(obj)
    .map(key => ({ ...obj[key], id: key }))
    .sort((a, b) => a.age - b.age);
};

// --- testData
console.log(getCustomersList(obj));
