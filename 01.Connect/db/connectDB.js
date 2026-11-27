import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export { connectDB };