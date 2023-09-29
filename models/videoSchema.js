import mongoose from 'mongoose';
const { Schema } = mongoose;

const videoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    url: {
        type: String,
    },
    cloudinary_id: {
        type: String,
    },
});


const Video = mongoose.model('Video', videoSchema);
export default Video;

/* const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    url: {
        type: String,
    },
    cloudinary_id : {
        type: String
    }
});

module.exports = mongoose.model("Video", videoSchema) */