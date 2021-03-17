import { Schema, model } from "mongoose";

const cafeteriaSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  breakfast: {
    type: String,
    required: true,
  },
  lunch: {
    type: String,
    required: true,
  },
  dinner: {
    type: String,
    required: true,
  },
});

export default model("cafeteria", cafeteriaSchema);
