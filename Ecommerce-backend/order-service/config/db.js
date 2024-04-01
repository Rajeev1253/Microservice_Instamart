import mongoose from "mongoose";
const connectdb = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/order`);
    console.log(`connected with database successfully ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
export default connectdb;
