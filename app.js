const express = require("express");
const session = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const app = express();
//cors
app.use(cors())
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
//Define Port
const port = process.env.PORT || 5321;


app.set('view engine', 'ejs');
app.use('/uploads', express.static("uploads"))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'))

app.use("/", router);

app.listen(port, () => console.log(`Listening on port ${port}`));


