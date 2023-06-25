const express = require("express");
const router = express.Router();
const ogs = require("open-graph-scraper");
let options = {
  url: "https://github.com/",
  timeout: 4000,
};

router.get("/", (req, res) => {
  ogs(options, function (error, result) {
    console.log("error", error);
    console.log("results", result);
    res.send({ results: result });
  });
});

module.exports = router;
