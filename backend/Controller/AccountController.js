const Accounts = require('../models/accountSchema');

exports.create = (req, res) => {
  const { Username, Password, Name, Address } = req.body;

  switch (true) {
    case !Username:
      return res.status(400).json({ error: 'กรุณาป้อน Username' });
      break;
    case !Password:
      return res.status(400).json({ error: 'กรุณาป้อน Password' });
      break;
  }
  Accounts.create({ Username, Password, Name, Address }, (err, accountData) => {
    if (err) {
      res.status(400).json({ error: 'กรอกข้อมูลให้ครบถ้วน' });
    }
    res.json(accountData);
  });
};
