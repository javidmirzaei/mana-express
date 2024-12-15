const { default: mongoose } = require("mongoose");
const DB_URL = "mongodb://localhost:27017/sth";

const connectDb = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Server Connected to MongoDb");
  } catch (error: any) {
    console.log(error.message);
  }
};

connectDb();
