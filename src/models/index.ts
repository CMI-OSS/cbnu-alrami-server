import * as mongoose from "mongoose";
import { connection } from "./connection";

const MONGO_URL = `mongodb+srv://${connection.DB_USER}:${connection.DB_PASSWORD}@cluster0.dsrg4.mongodb.net/${connection.DB_NAME}?retryWrites=true&w=majority`;

mongoose.pluralize(null);

export default () => {
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
