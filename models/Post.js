const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    username: {
      type: String,
    },
    photo: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("Post", postSchema);
module.exports = Post;