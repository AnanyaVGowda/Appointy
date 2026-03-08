import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.warn("MONGODB_URI is not defined. Skipping database connection...");
      return;
    }
    await mongoose.connect(`${process.env.MONGODB_URI}/appointy`);
    console.log("Database Connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
