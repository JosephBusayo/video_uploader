import fs from 'fs'
import path from 'path';
import multerConfig from '../config/multerConfig.js';
const {folderPath } = multerConfig;


export const post_video = async (req, res, next) => {
    const file = {
        name: req.files[0].originalname,
        url: req.files[0].path,
        /* id: `${req.files[0].size}-${req.files[0].filename}`, */
    };
    console.log(req.files);
    res.status(201).send(file);
};


//Getting video info for the get requests
const videoFiles = fs.readdirSync(folderPath)
const videoInformation = videoFiles.map((file) => {
    const filePath = path.join(folderPath, file);
    const ext = path.extname(file);
    const fileNameWithoutExt = path.basename(file, ext);
    const [id, fileSize] = fileNameWithoutExt.split('-');
    
    // Get file stats to retrieve file size
    const stats = fs.statSync(filePath);
    const fileSizeInBytes = stats.size;
    
    return {
        id,
        name: file,
        path: filePath,
        ext,
        fileSize: fileSizeInBytes,
    };
});


export const get_all_video = async (req, res) => {
    res.status(200).send(videoInformation)
}

