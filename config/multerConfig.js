const multer = require("multer")
const path = require("path");

const videoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== ".mp4" && ext !== ".mkv" && ext !== ".jpg") {
            console.log("Error from multer side")
            return cb(new Error("File type is not supported"), false);
        }
        cb(null, path.join(__dirname, "../files"));
    },
    filename: (req, file, cb) => {
        console.log("I stored the file")
        cb(null, Date.now() + '-' + file.originalname);
    },
});

module.exports = {
    videoUpload: multer({ storage: videoStorage }),
};








/* const videoStorage = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        if (ext !== ".mp4" && ext !== ".mkv" && ext !== ".jpg") {
            cb(new Error("File type is not supported"), false)
            return
        }
        cb(null, true)
    }
}) */
