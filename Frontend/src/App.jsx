import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import CreateNote from './pages/CreateNote';
import NoteDetail from './pages/NoteDetail';
import toast from 'react-hot-toast';

const App = () => {

    return (
        <div data-theme = 'forest'>
            <button onClick = {
                () => {
                    toast.success("Congo")
                }
            } className='btn btn-outline'>
                click me
            </button>
            <Routes>
                <Route path = '/' element={<Home/>} />
                <Route path = '/create' element={<CreateNote/>} />
                <Route path = '/note/:id' element={<NoteDetail/>} />
            </Routes>
        </div>
    );
};

export default App;