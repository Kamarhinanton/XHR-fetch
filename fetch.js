const requestURL = 'https://jsonplaceholder.typicode.com/users'

//Get==================================
function sendRequestGet(method, url) {
  //fetch вертає PROMIS
  //зачейнити
  return fetch(url).then(response => {
    return response.json()
  })
}

// sendRequestGet('GET', requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))


//Post==================================
function sendRequestPost(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  }
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    //обробка помилок, можна і .status > 400
    if (response.ok) {
      return response.json()
    }
    return response.json().then(error => {
      const e = new Error('Щось не так')
      e.data = error
      throw e
    })
  })
}

const body = {
  name: 'Anton',
  age: 28
}

sendRequestPost('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))