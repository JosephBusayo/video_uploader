import { Router } from 'express';
import postVideo from '../controllers/videoController.js';
import upload from '../config/multerConfig.js';
const router = Router();



router.post('/uploadVideo', upload.videoUpload.any(), postVideo);
export default router; 


/* const router = require("express").Router()
const videoController = require("../controllers/videoController")
const upload = require("../config/multerConfig")


//Video routes
router.post("/uploadVideo", upload.videoUpload.any(), videoController.postVideo)

module.exports = router; */