const {MongoClient} = require('mongodb')

const connectDB = async() => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL, {
      // stops warnings?
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false
    });

  } catch (err){
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB