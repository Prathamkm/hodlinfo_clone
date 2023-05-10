const Ticker = require("../models/tickers.js");
const axios = require("axios");

const storeTopTenTickers = async (req, res) => {
  try {
    const { data } = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const topTen = Object.keys(data).slice(0, 10);
    const tickerData = topTen.map((key) => ({
      name: key,
      last: data[key].last,
      buy: data[key].buy,
      sell: data[key].sell,
      volume: data[key].volume,
      base_unit: data[key].base_unit,
    }));

    await Ticker.create(tickerData);

    res.status(200).send("Top 10 tickers saved to database");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching or saving tickers");
  }
};
module.exports = { storeTopTenTickers };
