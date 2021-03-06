/* eslint-disable no-undef */
function search(query, cb) {
  return fetch(`api/food?q=${query}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

// function products(query, cb) {
//   return fetch(`api/combo?q=${query}`, {
//     accept: "application/json"
//   })
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(cb);
// }

function products(query, cb) {
  return fetch(`api/products/search?q=${query}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function pedido(foods, cb) {
  return fetch(`api/pedido`, {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(foods)
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  // const error = new Error(`HTTP Error ${response.statusText}`);
  // error.status = response.statusText;
  // error.response = response;
  // console.log(error); // eslint-disable-line no-console
  // throw error;
  console.log(response.statusText)
}

function parseJSON(response) {
  return response.json();
}

const Client = { search, products, pedido };
export default Client;
