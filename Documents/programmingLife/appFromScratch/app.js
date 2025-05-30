const express = require("express");
const dotenv = require("dotenv");
const mongodb = require("mongodb");
const morgan = require("morgan");
const exphbs = require('express-handlebars')
const connectDB = require("./config/db")

// load config
// put object with a path to a config file
dotenv.config({ path:'./config/config.env' })

connectDB()

const app = express();

// shows requests information
// logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan('dev'))
}

// handlebars
app.engine('.hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');


const PORT = process.env.PORT || 3000




app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})