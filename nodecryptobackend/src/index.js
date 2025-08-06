import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cron from "node-cron";
import cryptoRoutes from "./routes/cryptoRoutes.js";
import { getCurrentCryptoData } from "./controllers/cryptoController.js";
import { connect_DB } from "./config/server.js";

dotenv.config();
connect_DB();

const app = express();
app.use(cors());
app.use(express.json());

// mongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.error("connection error:", err));

// Routes
app.use("/api/crypto", cryptoRoutes);

// Cron job
cron.schedule("0 * * * *", () => {
  console.log("crom job running hourly");
  getCurrentCryptoData();
});

// load data
getCurrentCryptoData();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
