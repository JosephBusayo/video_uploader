const router = require("express").Router()
const videoController = require("../controllers/videoController")
const upload = require("../config/multerConfig")


//Video routes
router.post("/uploadVideo", upload.videoUpload.any(), videoController.create)

module.exports = router;