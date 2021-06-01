import { Schema, model } from "mongoose";

const restaurantDetailSchema = new Schema({
  menu: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const restaurantSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  details: {
    type: [restaurantDetailSchema],
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  break: {
    type: String,
    required: true,
  },
});

export default model("restaurant", restaurantSchema);
