const requestURL = 'https://jsonplaceholder.typicode.com/users'

//метод xhr підтримується усіма браузерами
//Get==================================
function sendRequestGet(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    //open відкриває зʼєднання
    xhr.open(method, url)

    //вказуємо що відповідь хочемо отримати в форматі json
    xhr.responseType = 'json'

    xhr.onload = () => {
      // console.log(typeof xhr.response) строка
      // console.log(JSON.parse(xhr.response)) обʼєкт

      //status більше 400 це помилки
      if (xhr.status >= 400) {
        //коли помилка
        reject(xhr.response)
      } else {
        //коли успіх
        resolve(xhr.response)
      }
    }

    xhr.onerror = () => {
      console.log(xhr.response)
    }

    xhr.send()
  })
}

sendRequestGet('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))


//Post===================================
//приймає 3 параметри
function sendRequestPost(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)

    xhr.responseType = 'json'
    //так як при відправці даних ми сформовуємо запрос до стороки, у хедері маємо взазати що це json
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {
        resolve(xhr.response)
      }
    }

    xhr.onerror = () => {
      reject(xhr.response)
    }

    //відправляти дані маємо у вигляді строки
    xhr.send(JSON.stringify(body))
  })
}

const body = {
  name: 'Anton',
  age: 28
}

// sendRequestPost('POST', requestURL, body)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))