const express = require("express");
const topTenRouter = require("./routes/tickers.js");
const storeTopTen = require("./utils/storeTopTen.js");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config({
  path: "./data/config.env",
});
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET"],
    credentials: true,
  })
);
storeTopTen();
app.use("/api/v1/hodlinfo", topTenRouter);
app.get("/", (req, res) => {
  console.log(process.env.FRONTEND_URL);
  res.send("Nice Working");
});

module.exports = app;
