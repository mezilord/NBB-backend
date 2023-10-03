import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {AnswerRouter} from "./routes/answer.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(AnswerRouter);

const uri = "mongodb+srv://nbb:nbb@cluster0.8nsytmz.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});