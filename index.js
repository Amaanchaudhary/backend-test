import express from "express"
import router from "./Routers/index.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import { json } from "express";

const app = express();

dotenv.config();
app.use(express.json())

app.get("/" , (req , res) => {
    res.send("Hello from backend")
})

app.use('/api/v1' , router)

app.listen(8000 , () => console.log("Backend server started"));
mongoose.connect(process.env.MONGOURL).then(()=>console.log("Database Connected"));