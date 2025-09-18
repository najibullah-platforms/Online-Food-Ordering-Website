import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://najibullahplatforms:Kabul2025@cluster0.xvm1nte.mongodb.net/food-dell').then(()=>console.log("DB Connected"))
}