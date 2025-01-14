import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  authorRole: {
    type: String,
    enum: ["college", "student"],
    required: true,
  },
  imagePath: {
    type: String,
    required: false,
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
