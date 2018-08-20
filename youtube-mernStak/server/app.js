const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const controller = require('./controller');

const app = express();

app.use(bodyparser.json());
mongoose.connect("mongodb://kosay:kosay88@ds115592.mlab.com:15592/users-db");

// Cors:
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://cryptic-springs-10908.herokuapp.com"
    ],
    methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    credentials: true //allow setting of cookies
  })
);

// session:
app.use(
  session({
    secret: "supersecretstring12345!",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 60000 * 30 }
  })
);
controller(app);

app.listen(8000, () => console.log('Listening...'));
