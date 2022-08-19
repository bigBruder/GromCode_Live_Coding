// GLOBAL LEX ENV
//   'enviromentRecord': {
//     'run': function;
//      'createMessenger': function,
//      'message': 'Test',
//     'weight': 55,
//      'messanger1': { ... },
//      'messanger2': undefined
//      'messanger2': undefined
//   },
//   'outherLexicalEnv': Global LEX ENV.,
// }

// Messanger1 Lex Environment

//   'enviromentRecord': {
//      'sendMessage': func,
//      'setSender': func,
//      'setMessage': func,
//      'message': 'Just learn it',
//      'sender': 'Gromcode',
//       'object': {sendMessage : func, setMessage: func, setSender: func}
//   },
//   'outherLexicalEnv': null
// }

// const message = 'Test';
// const weight = 55;

// function run() {
//   console.log('RUN');
// }

// function createMessenger() {
//   let message = 'Just learn it';
//   let sender = 'Gromcode';

//   function sendMessage(name) {
//     console.log(`${name}, ${message}! Your ${sender}`);
//   }

//   function setSender(newSender) {
//     sender = newSender;
//   }

//   function setMessage(text) {
//     message = text;
//   }

//   return {
//     sendMessage,
//     setMessage,
//     setSender,
//   };
// }

// const messanger = createMessenger();
// run();

const message = 'Test';
const weight = 55;

let price = 100;

function setPrice() {
  price = 300;
}

function printPrice() {
  console.log(price);
}

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    setPrice,
    printPrice,
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger1 = createMessenger();
messanger1.setPrice();
messanger1.printPrice();
const messanger2 = createMessenger();
messanger2.sendMessage('Romio');
const messanger3 = createMessenger();
run();
//
//
//
//
//

const createLogger = () => {
  const records = [];

  return {
    warn(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: 'warn',
      });
    },
    error(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: 'error',
      });
    },
    log(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: 'log',
      });
    },
    getRecords(type) {
      return (type ? records.filter(el => el.type === type) : records).sort(
        (a, b) => b.dateTime - a.dateTime,
      );
    },
  };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]

const logger2 = createLogger();
logger2.log('sdsdsdsd');

console.log(logger2.getRecords());
