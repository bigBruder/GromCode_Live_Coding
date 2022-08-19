const formElem = document.querySelector('.login-form');

const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

function createUserHandler(event) {
  event.preventDefault();

  // read form

  const user = {
    email: 'test@gmail.com',
    name: 'Roman',
    password: '123',
  };

  console.log(JSON.stringify(user));

  // http request

  fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      alert(data);
    })
    .catch(e => {
      alert('error happened');
    });
}

//   const thenResult = httpPromise.then(response => {
//     return response.json();
//     //?
//   });

//   thenResult
//     .then(data => {
//       alert(data);
//     })
//     .catch(e => {
//       alert('error happened');
//     });
// }

formElem.addEventListener('submit', createUserHandler);
