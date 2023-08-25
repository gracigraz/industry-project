const express = require("express");
const router = express.Router();
const fs = require("fs");
const crypto = require("crypto");

function readOnbaordingFile() {
  const onboardingList = fs.readFileSync("./data/onboarding.json");
  const parsedData = JSON.parse(onboardingList);
  return parsedData;
}

router.use(logMessage);

router.get("/", (req, res) => {
  const questions = readOnboardingFile();
  res.json(questions);
  res.end();
});

// GET endpoint for an individual athlete
router.get("/:questionId", (req, res) => {
  // Read the file and find the single athlete whose id matches the requested id
  const questions = readOnboardingFile();
  const singleQuestion = questions.find(
    (question) => question.id === req.params.questionId
  );

  // This might be a good place to check if the athlete was found 👀

  // Respond with the single athlete
  res.json(singleQuestion);
});

function logMessage(req, res, next) {
  console.log("hello from the onboarding route");
  next();
}

module.exports = router;
