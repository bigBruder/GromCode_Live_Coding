// BAD option
// remote logic from if
// get rid of duplicate code
// don't use find

// const withdraw = (clients, balances, client, amount) => {
//   if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//     return -1;
//   }
//   return balances.find((item, index) => clients.indexOf(client) === index) - amount;
// };

// GOOD option

// const withdraw = (clients, balances, client, amount) => {
//     if (balances[clients.indexOf(client)] < amount){
//         return - 1
//     }
//     return balances[clients.indexOf(client)] - amount;
// };

// Igor
// Too much short and not understandable
// dont use ternaroperator here
// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount
//     ? (balances[clients.indexOf(client)] -= amount)
//     : -1;

//Oleksiy
// not so good quality

// const withdraw = (clients, balances, client, amount) => {
//     let clientBalance = balances[clients.indexOf(client)]
//  if (clientBalance >= amount) {
//    clientBalance -= amount;
//    balances[clients.indexOf(client)] = clientBalance;
//    return (clientBalance);
//  };

//  return -1;
// }

//Good

// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   if (clientBalance < amount) {
//     return -1;
//   }
//   clientBalance -= amount;

//   balances[clientIndex] -= amount;;
//   return balances[clientIndex];
// };

// Serhiy

// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);

//   balances[clientIndex] -= amount;
//   return balances[clientIndex] < amount ? -1 : (balances[clientIndex] -= amount);
// };

// test Data
// const balances = [1400, 87, -6];
// const res = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
// console.log(res);
// console.log(balances);

// Denis
// Bad
// const withdraw = function (clients, balances, client, amount) {
//     if (balances[clients.indexOf(client)] - amount < 0) {
//       return -1;
//     }
//     balances[clients.indexOf(client)] -= amount;
//     return balances[clients.indexOf(client)];
//   };

//Volodymyr
// Bad quality because of returning expression
// const withdraw = (clients, balances, client, amount) => {
//   let clientIndex = clients.indexOf(client);
//   return balances[clientIndex] < amount ? -1 : (balances[clientIndex] -= amount);
// };

//Alexandr Siomyj
// const withdraw = (clients, balances, client, amount) => {
//   if (balances[clients.indexOf(client)] > amount) {
//     return (balances[clients.indexOf(client)] -= amount);
//   }
//   return -1;
// };

// Nastya
// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount ? balances[clients.indexOf(client)] - amount : -1;

//GOOD solution
const withdraw = function (clients, balances, client, amount) {
  const clientIndex = clients.indexOf;
  if (balances[clientIndex] < amount) {
    return -1;
  }
  balances[clientIndex] -= amount;
  return balances[clientIndex];
};

// const getRandomNumbers = (length, from, to) => {
//   const fromCeil = Math.ceil(from);
//   const toCeil = Math.ceil(to);

//   if (toCeil - fromCeil < 1) {
//     return null;
//   }

//   return new Array(length).fill(Math.trunc(Math.random() * (toCeil - fromCeil) + fromCeil));
// };
