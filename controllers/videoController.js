const videoModel = require('../models/videoSchema')
const cloud = require('../config/cloudinaryConfig')


const moduleExports = {
    create: async (req, res, next) => {
        try {
            // Extract uploaded file information
            const file = {
                name: req.files[0].originalname,
                url: req.files[0].path,
                id: "",
            };

            // Upload the file to Cloudinary
            const result = await cloud.uploads(file.url);
            console.log(result)

            // Create a video record in the database
            const createdVideo = await videoModel.create({
                name: file.name,
                url: result.url,
                id: result.id,
            });
            console.log("First return in controller")
            res.json({
                success: true,
                data: createdVideo,
            });
        } catch (err) {
            console.error(err); // Log the error for debugging
            res.status(500).json({
                error: true,
                message: "An error occurred during video creation.",
            });
        }
    },
};

module.exports = moduleExports;

module.exports = moduleExports;

/* exports.uploadVideo = (req, res, next) => {
    cloud.uploader.upload(req.file.path,
        {
            resource_type: 'video',
            folder : "files"
        },
        (err, result) => {
            if(err){
                console.log(err)
                return res.status(500).send(err)
            }
            const upload = new videoModel({
                name : req.file.originalname,
                url : result.url,
                cloudinary_id : result.public_id,
                desc : req.body.desc
            })
            upload.save((err, result) => {
                if(err){
                    console.log(err)
                    return res.status(500).send(err)
                }
                return res.status(200).send(result)
            })
        }
    )
} */