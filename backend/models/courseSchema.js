const mongoose = require('mongoose');
const courseSchema = mongoose.Schema(
  {
    Title: {
      type: String,
      require: true,
      unique: true,
    },
    Description: {
      type: String,
      require: true,
    },
    Price: {
      type: Number,
      require: true,
    },
    Time: {
      type: String,
      require: true,
    },
    Img: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Courses', courseSchema);
