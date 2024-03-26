import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectdb from "./config/db.js";
import routes from "./routes/index.js"
const app = express();
dotenv.config();

app.use(cors())
app.use(express.json())
app.use("/",routes)
connectdb();

const port  =process.env.PORT;
app.listen(port,()=>{
    console.log(`port is listening port no ${port}`)
})