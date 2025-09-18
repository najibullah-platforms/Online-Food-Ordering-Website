import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';

// app config 
const app = express()
const port = 4000

//middleware
app.use(express.json());
app.use(cors())

// db connection

connectDB();

//api endpoinsts 
app.use("/api/food",foodRouter)
app.use("/image",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server stared on http://localhost:${port}`)
})

// mongodb+srv://najibullahplatforms:Kabul2025%@cluster0.xvm1nte.mongodb.net/?