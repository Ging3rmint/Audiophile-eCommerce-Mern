import dotenv from "dotenv";
import AudioProduct from "./models/audioProductModel.js";
import audiProducts from "./data/products.js";
import connectDB from "./config/db.js";

dotenv.config();

await connectDB();

const importData = async () => {
  try {
    await AudioProduct.deleteMany({});
    await AudioProduct.insertMany(audiProducts);
    console.log("Data Imported");
    process.exit(0);
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

importData();
