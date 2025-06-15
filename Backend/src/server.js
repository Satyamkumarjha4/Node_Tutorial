import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import notesRoutes from './router/notesRoutes.js'
import { connectDB } from './config/db.js';
import ratelimiter from './middleware/rateLimter.js';

dotenv.config()

const app = express();

const PORT = process.env.PORT;

// middleware
app.use(express.json())
app.use(cors())
app.use(ratelimiter)

app.use('/api/notes', notesRoutes)

connectDB(process.env.DATABASE_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})


