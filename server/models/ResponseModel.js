import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const responseSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
    default: Date.now
  }
});

//export the model
const Response = mongoose.model('Response', responseSchema);
export default { Response } ; 