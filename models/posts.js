import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: [50, "Title must be less than 50 characters"]
    },
    content: {
        type: String,
        required: true,
        trim: true,
        maxlength: [500, "Content must be less than 500 characters"]
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Posts = mongoose.model("Posts", postSchema);

export default Posts;