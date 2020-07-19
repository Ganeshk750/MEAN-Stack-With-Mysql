require('dotenv').config();
const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "Our Rest Api is Working Now!!",
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is Running on port ${port}`));
