import express from 'express'
import { createNote, deleteNote, getallNotes, updateNote, getNotebyID } from '../controller/notesController.js';


const router = express.Router();

router.get('/', getallNotes);
router.get('/:id', getNotebyID);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;