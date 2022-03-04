const sendData = (url,data)=>{
  return fetch(url,{
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then(response=>response.json())

}

const getData = (url)=>{
    return fetch(url).then(response=>response.json()) 
  }

getData('db.json')
  .then(data=>console.log(data))
  .catch (error=>console.log(error))

sendData('https://jsonplaceholder.typicode.com/posts')
.then(data=>console.log(data))
.catch (error=>console.log(error))