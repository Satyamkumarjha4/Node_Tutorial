import mongoose from 'mongoose'

export const connectDB = async (DB) => {
    try {
       await mongoose.connect(DB);
       
       console.log("Database Connection Sucessful")
    } 
    catch (error) {
        console.log("Error connecting to Database")
        process.exit(1) //exit due to faliure
    }
}