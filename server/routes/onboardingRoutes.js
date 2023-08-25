const express = require("express");
const router = express.Router();
const fs = require("fs");
const crypto = require("crypto");

function readQuestionsFile() {
  const athleteList = fs.readFileSync("./data/athletes.json");
  const parsedData = JSON.parse(athleteList);
  return parsedData;
}

function logMessage(req, res, next) {
  console.log("hello from the athletes route");
  next();
}

module.exports = router;
