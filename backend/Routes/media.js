const express = require('express');
const { videoUpload } = require('../middleware/videoUpload');
const { addVideo, getAllVideos } = require('../Controller/videoController');
const { requireLogin } = require('../Controller/authcontroller');
const router = express.Router();
router.post('/upload', requireLogin, videoUpload.single('video'), addVideo);
router.get('/videos', getAllVideos);
module.exports = router;
