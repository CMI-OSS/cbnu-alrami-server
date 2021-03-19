import { Schema, model } from "mongoose";

const cafeteriaSchema = new Schema({
  date: {
    type: String,
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
    required: false,
  },
  lunch: {
    type: String,
    required: false,
  },
  dinner: {
    type: String,
    required: false,
  },
});

export default model("cafeteria", cafeteriaSchema);
