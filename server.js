const express = require("express");
require("dotenv").config(); 

const app = express();
const router=express.Router();


const port = process.env.PORT || 5000;

// Simple API endpoint
app.get("/api/contacts", (req, res) => {
  res.status(200).json("Get all contacts");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
