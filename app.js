const express = require("express");
const top10Router = require("./routes/tickers.js");
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
app.use("/api/v1/hodlinfo", top10Router);
app.get("/", (req, res) => {
  res.send("Nice Working");
});

module.exports = app;
