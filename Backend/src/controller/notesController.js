import express from 'express'

export function getallNotes(res, req){
    res.status(200).send("There are 10 notes");
}

export function createNote(res,req){
    res.status(201).json({
        message:"Note Sucessfully created"});
};

export function updateNote(res,req){
    res.status(200).json({
        message:`Note with id ${req.params.id} updated sucessfully`});
}

export function deleteNote(res,req){
    res.status(200).json({
        message:`Note with id ${req.params.id} deleted sucessfully`});
}