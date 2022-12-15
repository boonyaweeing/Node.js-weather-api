const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json') //Load JSON data
const dataJSON = dataBuffer.toString() //Change JSON data to string
const user = JSON.parse(dataJSON) //parse the string data to object

user.name = 'Daniel'
user.age = 33

const userJSON = JSON.stringify(user) 
fs.writeFileSync('1-json.json', userJSON) //Overwrite the data


