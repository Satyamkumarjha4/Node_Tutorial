import { Note } from "../Models/Note.js";

export async function getallNotes(req, res){
    try {
        const notes = await Note.find().sort({createdAt:-1})
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getallNotes controller",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function getNotebyID(req, res){
    try {
        const note = await Note.findById(req.params.id)
        if (!note) return res.status(404).json({message:`Note with id ${req.params.id} not found`})
        res.status(200).json(note)
    } catch (error) {
        console.error("Error in getNotebyID controller",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export async function createNote(req,res){
    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content})
        const saveNote = await newNote.save()

        res.status(201).json({message:"new Note sucessfully created", newNote:saveNote})
    } catch (error) {
        console.error("Error in createNote controller",error);
        res.status(500).json({message:"Internal server error"});
    }
};

export async function updateNote(req,res){
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate
        (
            req.params.id, 
            {
                title,
                content
            },
            {
                new:true
            }
        );
        console.log(updatedNote);
        if (!updatedNote) return res.status(404).json({message:`Note with id ${req.params.id} not found`})
        const saveNote = await updatedNote.save()
        res.status(200).json({message:"Note Sucessfully updated", update:updatedNote})  
    } catch (error) {
        console.error("Error in updateNote controller",error);
        res.status(500).json({message:"Internal server error"});
    }
      
}

export async function deleteNote(req,res){
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id) 
        if (!deletedNote) return res.status(404).json({message:`Note with id ${req.params.id} not found`})
        res.status(200).json({message:"Note Sucessfully updated", delete:deletedNote})
    } catch (error) {
        console.error("Error in deleteNote controller",error);
        res.status(500).json({message:"Internal server error"});
    }
}