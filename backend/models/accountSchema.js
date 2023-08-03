const mongoose = require('mongoose');
const AccountSchema = mongoose.Schema(
  {
    Username: {
      type: String,
      require: true,
      unique: true,
    },
    Password: {
      type: {},
      require: true,
    },
    Name: {
      type: String,
      require: true,
    },
    Address: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Accounts', AccountSchema);
