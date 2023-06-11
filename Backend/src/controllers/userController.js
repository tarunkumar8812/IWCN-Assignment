const pool = require("../db.js")

// ----------------------------- creating Notes table -----------------------------
const createNoteTable = async (req, res) => {
    try {
        const result = await pool.query(`
        CREATE TABLE notes (
            id int auto_increment NOT NULL primary key ,
            title varchar(255),
            noteText varchar(255),
            date varchar(255)
            )
        `)

        // updatedAt TIMESTAMP DEFAULT now() ON UPDATE now() NOT NULL 

        console.log(result);
        return res.status(201).json({ status: true, message: "Notes Table created Successfully " })

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}



// ----------------------------- creating Note -----------------------------
const createNote = async (req, res) => {
    try {

        console.log(req.body);
        const { title, noteText, date } = req.body
        const result = await pool.query(`
            INSERT INTO notes(title, noteText, date)
            VALUES ( "${title}", "${noteText}" ,"${date}")
            `)


        // updatedAt TIMESTAMP DEFAULT now() ON UPDATE now() NOT NULL 

        console.log(result);
        return res.status(201).json({ status: true, message: "Note created Successfully " })

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}

// ----------------------------- creating Note -----------------------------
const getNotes = async (req, res) => {
    try {

        console.log(req.body);
        const result = await pool.query(`
            SELECT * 
            FROM notes
            `)


        // updatedAt TIMESTAMP DEFAULT now() ON UPDATE now() NOT NULL 

        console.log(result[0]);
        return res.status(201).json({ status: true, data: result[0] })

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}
// ----------------------------- delete Note -----------------------------
const deleteNote = async (req, res) => {
    try {

        
        const result = await pool.query(`
            DELETE
            FROM notes
            WHERE id = ${req.query.id}
            `)


        // updatedAt TIMESTAMP DEFAULT now() ON UPDATE now() NOT NULL 

        console.log(result[0]);
        return res.status(201).json({ status: true, data: result[0] })

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}

module.exports = { createNoteTable, createNote, getNotes, deleteNote }