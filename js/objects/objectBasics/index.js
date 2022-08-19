//input: obj, key, value
//output: newObj

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  objectAssign;
  // input: targets object, other objects
  // output: new one object
  return Object.assign(obj, { [key]: value });
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  //input: obj, key, value
  //output: new object
  return { ...obj, [key]: value };
}

// -- test Data
const transaction = {
  value: 170,
};
const res1 = addPropertyV4(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
const res2 = addPropertyV4(transaction, 'currency', 'USD');
console.log('result1', res1);
console.log('result2', res2);
console.log('obj after', transaction);
