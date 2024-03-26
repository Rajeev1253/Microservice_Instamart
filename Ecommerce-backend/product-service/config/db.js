import mongoose from "mongoose";
const connectdb = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URL}/product`);
    console.log(`connected with database successfully ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
export default connectdb;
