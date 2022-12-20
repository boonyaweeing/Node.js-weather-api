const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes...'

//Add note

const addNote = (title, body) => {
    const notes = loadNotes()

    //check if the title is already taken
    // const duplicateNotes = notes.filter((note) => note.title === title) //keep searching once found
    const duplicateNote = notes.find((note) => note.title === title) //stop searching once found

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Note title taken!'))
    }
}

//Remove note

const removeNote = (title) => {
    const notes = loadNotes()
    //check if the title exists
    const notesToKeep = notes.filter((note) => note.title !== title)

    //check if the note has been removed
    if (notes.length > notesToKeep.length) {
        console.log(chalk.bgGreen('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.bgRed('No note found!'))
    }
}

//List note

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your  notes'))
    
    notes.forEach((note) => {
        console.log(note.title)
    })
}

//Read note
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.orange.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red('The note does not exist!'))
    }
}



const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}