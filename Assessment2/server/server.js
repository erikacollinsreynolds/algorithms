const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const itemRouter = require('./routes/items.js');
const authController = require('./controllers/authController');

const app = express();

// config app
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// static assets and files
app.use('/', express.static(path.resolve(__dirname, '../views')));
app.use('/', express.static(path.resolve(__dirname, '../assets')));

// routes
app.use('/items', itemRouter);
app.get('/store', authController.verifyCookie, (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../views/store.html'));
});
app.post('/signin', authController.setCookie, (req, res) => {
  // redirect user to store page
  res.redirect('/store');
});

// unknown route handler
app.use((req, res) => res.status(404).send('Page not found'));

// global error handler
app.use((err, req, res, next) => {
  console.log(err.log);
  return res.status(err.status || 500).json(err.message);
});

app.listen(3333, () => console.log('listening on port: 3333'));