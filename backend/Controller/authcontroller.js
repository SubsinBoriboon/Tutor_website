const jwt = require('jsonwebtoken');
const { expressjwt: expressjwt } = require('express-jwt');

exports.login = (req, res) => {
  const { Username, Password } = req.body;
  if (Password === process.env.PASSWORD) {
    const Token = jwt.sign({ Username }, process.env.JWT_SECRET, {
      expiresIn: '100d',
    });
    return res.json({ Token, Username });
  } else {
    return res.status(400).json({
      error: 'password incorrect',
    });
  }
};
exports.requireLogin = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  userProperty: 'auth',
});
