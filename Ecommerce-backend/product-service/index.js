import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import routes from "./routes/index.js"
import connectdb from "./config/db.js";
import consumeMessages from "./worker/consumer.js";
const app = express();
dotenv.config();
app.use(express.json())
app.use(cors())
app.use(("/"),routes)
connectdb();
consumeMessages()
const port  =process.env.PORT;
app.listen(port,()=>{
    console.log(`port is listening port no ${port}`)
})