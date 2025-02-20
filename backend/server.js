// const http = require('http');
// const app = require('./app');


const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post("/api/search", (req, res) => {
  const { topic } = req.body;
  console.log("Received search topic:", topic);
  // res.json({ message: `Results for '${topic}'`, tweets: [] });
  res.json({ message: `Test result`});
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
