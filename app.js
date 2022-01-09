const express = require('express');
const morgan = require('morgan');
const router = require("./src/routes");
const db = require('./src/database')
const app = express();

const bodyParser = require('body-parser')

//connection
db.dbConnection(app)

//register a view engine 
app.set('view engine','ejs');
app.set("views" , "src/views")

//MiddleWare
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json())

//static files
app.use(express.static(__dirname));

//routes
app.use(router)

