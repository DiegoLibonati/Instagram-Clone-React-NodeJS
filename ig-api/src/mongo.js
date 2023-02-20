import mongoose from "mongoose";
import config from "./config.js";

export const mongooseConnection = async () => {
  try {
    await mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Se conecto a la base de datos con exito");
  } catch (error) {
    console.log(error);
  }
};
