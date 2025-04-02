const express = require("express");
const redis = require("redis");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Connect to Redis
const client = redis.createClient({
  host: "redis", // Redis container name from Docker Compose
  port: 6379
});
client.on("connect", () => {
  console.log("Connected to Redis...");
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle user registration
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required." });
  }

  // Store username and password in Redis (storing as a simple key-value pair)
  client.set(username, password, (err, reply) => {
    if (err) {
      return res.status(500).json({ error: "Error storing data in Redis" });
    }
    res.status(200).json({ message: "User registered successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
