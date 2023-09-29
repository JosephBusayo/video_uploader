const mongoose = require('mongoose')
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

module.exports = mongoose.model("Video", videoSchema)