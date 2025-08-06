import mongoose from "mongoose";

const cryptoSchema = new mongoose.Schema({
  id: String,
  symbol: String,
  name: String,
  current_price: Number,
  market_cap: Number,
  price_change_percentage_24h: Number,
  last_updated: Date,
});

export const CurrentCrypto = mongoose.model("CurrentCrypto", cryptoSchema);
export const HistoricalCrypto = mongoose.model("HistoricalCrypto", cryptoSchema);
