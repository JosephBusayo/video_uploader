import multer from 'multer';
import path from 'path';
import fs from 'fs';
import os from 'os';


const desktopDirectory = path.join(os.homedir(), 'Desktop');
const folderName = 'chrome_screen_record';
const folderPath = path.join(desktopDirectory, folderName);

// Create the folder if it doesn't exist
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log(`Folder "${folderName}" created on the Desktop.`);
} else {
    console.log(`Folder "${folderName}" already exists on the Desktop.`);
}

const videoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== '.mp4' && ext !== '.mkv' && ext !== '.jpg') {
            console.log('Error from multer side');
            return cb(new Error('File type is not supported'), false);
        }
        cb(null, folderPath); // Store the video in the created folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

export default {
    videoUpload: multer({ storage: videoStorage }),
    folderPath: folderPath,
};