import express from "express";
import {AnswerModel} from "../models/answer.js";
const router = express.Router();

router.get("/getRecord", async (req, res) => {
  try {
    const Answer = await AnswerModel.findOne({
      _id: "651b992862b680ccce360503",
    });
    if (!Answer) {
      return res.status(200).json({ message: "There is no Answer stored" });
    }
    return res
      .status(200)
      .json({ message: "Answer successfully retrieved", Answer });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});
router.put("/setRecord", async (req, res) => {
  try {
    const Answer = await AnswerModel.findOne({
      _id: "651b992862b680ccce360503",
    });
    if (!Answer) {
      return res.status(200).json({ message: "There are no Answer stored" });
    }
    Answer.answer = req.body.answer;
    await Answer.save();
    return res
      .status(200)
      .json({ message: "Answer successfully updated", Answer });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

export { router as AnswerRouter };
