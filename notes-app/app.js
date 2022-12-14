// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)

// const validator = require('validator')

const chalk = require('chalk')

const getNotes = require('./notes.js')

// const msg = getNotes()

// console.log(msg)

// console.log(chalk.bold.inverse.blue('Error!'))

// console.log(process.argv[2])

const command = process.argv[2]

console.log(process.argv)

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}