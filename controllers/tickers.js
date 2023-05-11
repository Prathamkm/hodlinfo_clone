const Ticker = require("../models/tickers.js");

const getTopTenTickers = async (req, res) => {
  try {
    const tickerData = await Ticker.find().limit(10);
    res.status(200).json(tickerData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching tickers from database");
  }
};

module.exports = { getTopTenTickers };
