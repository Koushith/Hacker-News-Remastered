import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://koushith:koushith97!@cluster0.mvgle.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Connected to Mongo DB", conn.connection.host);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
