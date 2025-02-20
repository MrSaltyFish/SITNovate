// const http = require('http');
// const app = require('./app');


const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// const server = http.createServer(app);

// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


app.use(express.json());
app.use(cors());

app.post("/api/search", (req, res) => {
  const { topic } = req.body;
  console.log("Received search topic:", topic);

  // Process the search and return a dummy response
  res.json({ message: `Results for '${topic}'`, tweets: [] });
});

app.post("/api/test", (req, res) => {
  console.log("Received test request");
  res.body("Hello World");
});


app.listen(port, () => console.log(`Server running on port ${port}`));

