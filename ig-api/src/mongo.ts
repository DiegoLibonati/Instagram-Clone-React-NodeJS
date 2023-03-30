import mongoose, { ConnectOptions } from "mongoose";
import config from "./config";

export const mongooseConnection = async () => {
  try {
    await mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: "admin",
    } as ConnectOptions);

    console.log("Se conecto a la base de datos con exito");
  } catch (error) {
    console.log(error);
  }
};
