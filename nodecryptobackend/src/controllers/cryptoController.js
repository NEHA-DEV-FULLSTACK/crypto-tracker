import { CurrentCrypto, HistoricalCrypto } from "../models/Crypto.js";
import fetchCryptoData from "../services/cryptoService.js";

// Get  data from DB
export const getCryptoData = async (req, res) => {
  try {
    const cryptos = await CurrentCrypto.find();
    res.json(cryptos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// crypto data from external API
export const getCurrentCryptoData = async () => {
  try {
    const data = await fetchCryptoData();

    await CurrentCrypto.deleteMany({});
    await CurrentCrypto.insertMany(data);
    await HistoricalCrypto.insertMany(data);

    console.log("Crypto data received:", new Date());
  } catch (err) {
    console.error("failed to fetch Crypto data:", err.message);
  }
};
