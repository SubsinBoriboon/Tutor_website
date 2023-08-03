const express = require('express');
const router = express.Router();
const multer = require('multer');
const { requireLogin } = require('../Controller/authcontroller');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg');
  },
});
const upload = multer({
  storage: storage,
});

const {
  middle,
  getAllCoursesMiddle,
} = require('../Controller/coursesController');

router.post('/middle', upload.single('Img'), middle);

router.get('/middleCourse', getAllCoursesMiddle);

module.exports = router;
