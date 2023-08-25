require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const onboardingRoutes = require("./routes/onboardingRoutes");
const cors = require("cors");

// app.use(cors()) enable cors, this configures the CORS middleware to allow requests from any origin (*)
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Received a get request");
  res.send("Hey, Your server is running.");
});

app.use("/onboarding", onboardingRoutes);

app.listen(PORT, () => {
  console.log("Server running on PORT " + PORT);
});
