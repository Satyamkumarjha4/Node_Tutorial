import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./router/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// middleware

app.use(
  cors()
);

app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);


connectDB(process.env.DATABASE_URL).then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
      }); 
});
