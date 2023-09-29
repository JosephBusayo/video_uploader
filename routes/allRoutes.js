import { Router } from 'express';
import multerConfig from '../config/multerConfig.js';
const router = Router();
import {post_video, get_all_video} from '../controllers/videoController.js';



router.post('/uploadVideo', multerConfig.videoUpload.any(), post_video);
router.get('/getAllVideo', get_all_video);
export default router; 


/* const router = require("express").Router()
const videoController = require("../controllers/videoController")
const upload = require("../config/multerConfig")


//Video routes
router.post("/uploadVideo", upload.videoUpload.any(), videoController.postVideo)

module.exports = router; */