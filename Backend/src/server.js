import express from 'express'
import notesRoutes from './router/notesRoutes.js'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import ratelimiter from './middleware/rateLimter.js';

dotenv.config()

const app = express();

const PORT = process.env.PORT;

// middleware
app.use(express.json())
app.use(ratelimiter)

app.use('/api/notes', notesRoutes)

connectDB(process.env.DATABASE_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})


