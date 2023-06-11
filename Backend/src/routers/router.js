const express = require("express");
const router = express.Router()
const { createNoteTable, createNote, getNotes, deleteNote } = require('../controllers/userController.js')


router.post('/user/createNoteTable', createNoteTable)


router.post('/user/createNote', createNote)

router.get('/user/getNotes', getNotes)
router.delete('/user/deleteNote', deleteNote)




module.exports = router