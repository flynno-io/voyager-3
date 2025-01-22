import { Schema, model, models } from "mongoose"

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  sol: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})

const Post = models.Post || model("Post", postSchema)

export default Post
