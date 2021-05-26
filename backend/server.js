import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

const clientP = mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((m) => m.connection.getClient())
  .catch((error) => `Error: ${error.message}`);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ clientPromise: clientP }),
    cookie: { maxAge: 180 * 60 * 1000 }, //3hrs expiry
  })
);

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);
// app.get("/api/config/stripe", (req, res) =>
//   res.send(process.env.STRIPE_API_KEY)
// );
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`${process.env.NODE_ENV} Server running on ${PORT}`)
);
