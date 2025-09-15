

import express from "express";
import dotenv from "dotenv";
import errorHandler from "./src/middlewares/errorhandler.js";
import connectDB from "./src/config/db.js";
import authRouter from "./src/routes/authRoutes.js";
import resetRouter from "./src/routes/resetRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/reset",resetRouter);

app.use(errorHandler)
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
      connectDB();
})

