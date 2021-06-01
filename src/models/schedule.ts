import { Schema, model } from "mongoose";

const ScheduleSchema = new Schema({
  start_date: {
    type: String,
    required: true,
  },
  end_date: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export default model("schedule", ScheduleSchema);
