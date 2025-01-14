import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};

export default connectMongoDB;
