const postVideo = async (req, res, next) => {
    const file = {
        name: req.files[0].originalname,
        url: req.files[0].path,
        id: "",
    };
    console.log(file);
    res.send(file);
};

export default postVideo;


/* const videoModel = require('../models/videoSchema')
const cloud = require('../config/cloudinaryConfig')

const moduleExports = {
    postVideo: async (req, res, next) => {
        const file = { name: req.files[0].originalname, url: req.files[0].path, id: "",};
        console.log(file);
        res.send(file)
    },
}

module.exports = moduleExports; */