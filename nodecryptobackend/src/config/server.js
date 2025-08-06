import mongoose from "mongoose";
// connect with mongoDB
export const connect_DB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (err) {
    console.error("connection failed", err.message);
    process.exit(1); 
  }
};
