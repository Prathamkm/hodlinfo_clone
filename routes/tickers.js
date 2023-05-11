const express = require("express");
const { getTopTenTickers } = require("../controllers/tickers.js");
const router = express.Router();

router.get("/get-top-10", getTopTenTickers);

module.exports = router;
