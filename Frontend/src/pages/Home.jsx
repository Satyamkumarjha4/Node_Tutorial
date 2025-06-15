import { useEffect, useState } from 'react';
import {toast} from 'react-hot-toast'
import axios from 'axios'

import api from '../lib/axios';
import Navbar from '../components/Navbar';
import RateLimitedUI from '../components/RateLimitedUI';
import NoteCard from '../components/NoteCard';
import NotesNotFound from '../components/NotesNotFound';


const Home = () => {
    const [isRatelimited,setisRatelimited] = useState(false)
    const [notes, setnotes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
    const fetchNotes = async () => {
        try {
            const res = await api.get("/notes");
            const data = res.data
            console.log(data)
            setnotes(res.data)
            setisRatelimited(false)
        } 
        catch (error) {
            console.log(error);
            if(error.response?.status === 429){
                setisRatelimited(true)
            }
            else{
                toast.error("Failed to load notes")
            }
        }
        finally{
            setIsLoading(false)
        }
        };
        fetchNotes();
    }, []);


    return (
        <div className='min-h-screen'>
            <Navbar />

            {isRatelimited && <RateLimitedUI />}

            {notes.length === 0 && !isRatelimited && <NotesNotFound />}

            <div className="max-w-7xl mx-auto p-4 mt-6">
                {isLoading && <div className="text-center text-primary py-10">Loading notes...</div>}

                {notes.length > 0 && !isRatelimited && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notes.map((note) => (
                        <NoteCard key={note._id} note={note} setNotes={setnotes} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default Home