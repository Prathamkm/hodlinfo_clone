const express = require("express");
const controller = require("../controllers/tickers.js");
const router = express.Router();

router.get("/store-top-10", controller.storeTopTenTickers);
module.exports = router;
