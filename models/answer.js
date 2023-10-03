import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true, 
  },
});

export const AnswerModel = mongoose.model('answer', AnswerSchema);

