import mongoose, { Schema } from "mongoose";

// Connect to MongoDB
const connectMongo = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
};

await connectMongo();

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["company", "college", "student"],
    required: true,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
