import { Schema, model } from "mongoose";

const restaurantDetailSchema = new Schema({
  menu: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
});

const restaurantSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  latitude: {
    type: Number,
    required: false,
  },
  longitude: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  detail: {
    type: [restaurantDetailSchema],
    required: false,
  },
  time: {
    type: String,
    required: false,
  },
  break: {
    type: String,
    required: false,
  },
});

export default model("restaurant", restaurantSchema);
