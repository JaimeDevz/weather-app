require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/weather/:city", async (req, res) => {
  const city = req.params.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error in weather API call:", error.response.data);
    res
      .status(error.response.status)
      .json({ message: error.response.data.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
