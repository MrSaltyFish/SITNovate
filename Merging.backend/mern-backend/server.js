const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/analyze/twitter", async (req, res) => {
    try {
        const { text } = req.body;

        // Send request to Flask API (Twitter model)
        const flaskResponse = await axios.post("http://localhost:5001/analyze/twitter", { text });
        res.json(flaskResponse.data);
    } catch (error) {
        console.error("Error calling Flask API:", error.message);
        res.status(500).json({ error: "Failed to analyze Twitter text" });
    }
});

app.post("/analyze/reddit", async (req, res) => {
    try {
        const { text } = req.body;

        // Send request to FastAPI (Reddit model)
        const fastApiResponse = await axios.post("http://localhost:8000/analyze/reddit", { text });
        res.json(fastApiResponse.data);
    } catch (error) {
        console.error("Error calling FastAPI:", error.message);
        res.status(500).json({ error: "Failed to analyze Reddit text" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});