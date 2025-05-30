const mongoose = require('mongoose');

const connectDB = async() => {
  try {
    // a connection variable
    const conn = await mongoose.connect(process.env.MONGO_URI) 
    console.log("connected to the db");
  } catch(err){
    console.log(`Err in db.js: ${err}`);
  }
}

module.exports = connectDB