import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

console.log("uri:", process.env.MONGODB_URI);
console.log("db name: ", DB_NAME);
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `/n MONGOB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;
