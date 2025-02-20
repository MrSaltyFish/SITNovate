const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // Allow all origins

app.get("/", (req, res) => {
  res.send("CORS enabled for all origins!");
});

app.post("/api/search", (req, res) => {
  const { topic } = req.body; // Extract topic from request body
  console.log("Received search topic:", topic);
  res.json({ message: `Results for '${topic}'`, tweets: [] });
});

// Change POST to GET so it works in a browser
app.get("/api/test", (req, res) => {
  console.log("Received test request");
  res.send("<h1>Hello World</h1><p>This is a test endpoint.</p>");
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
