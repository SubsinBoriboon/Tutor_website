const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const { readdirSync } = require('fs');
const authRoute = require('./Routes/auth');
const accountRouth = require('./Routes/data');
const middleCourse = require('./Routes/middle');
const mediaRouth = require('./Routes/media');

// buiding app by express
const app = express();

// connect cloud database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(() => console.log('Completely conect mongoDB'))
  .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// route
readdirSync('./Routes').map((Route) =>
  app.use('/api', require('./Routes/' + Route))
);
app.use('/api', authRoute);
app.use('/api', accountRouth);
app.use('/api', middleCourse);
app.use('/public', express.static(path.join(__dirname, 'public')));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`start server in port ${port}`);
});
