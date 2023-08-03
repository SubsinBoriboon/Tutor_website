const Courses = require('../models/courseSchema');

exports.middle = (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const { Title, Description, Price, Time } = req.body;
  // const { Title, Description, Price, Time, Img } = req.body;

  switch (true) {
    case !Title:
      return res.status(400).json({ error: 'กรุณาป้อนชื่อคอร์ส' });
      break;
    case !Price:
      return res.status(400).json({ error: 'กรุณาป้อนราคาสินค้า' });
      break;
    case !Time:
      return res.status(400).json({ error: 'กรุณาป้อนชั่วโมงเรียน' });
      break;
  }
  Courses.create(
    { Title, Description, Price, Time, Img: req.file.filename },
    (err, CourseData) => {
      if (err) {
        res.status(400).json({ error: err });
      }
      res.json(CourseData);
    }
  );
};
exports.getAllCoursesMiddle = (req, res) => {
  Courses.find({}).exec((err, allCoursesmiddle) => {
    res.json(allCoursesmiddle);
  });
};
