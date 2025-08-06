import axios from "axios";

// get latest crypto data from Coin Gecko
const fetchCryptoData = async () => {
  const url = "https://api.coingecko.com/api/v3/coins/markets";
  const { data } = await axios.get(url, {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 10,
      page: 1,
      sparkline: false,
    },
  });
  return data;
};

export default fetchCryptoData;

