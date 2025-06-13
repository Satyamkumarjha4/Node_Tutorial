import express from 'express'
import { createNote, deleteNote, getallNotes, updateNote } from '../controller/notesController.js';


const router = express.Router();

router.get('/', getallNotes);

router.post('/', createNote);

router.put('/:id', updateNote);

router.delete('/:id', deleteNote);

export default router;