import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://harshdhoke:harsh0315@cluster0.lgrt2ys.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}