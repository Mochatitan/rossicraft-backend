// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Sample GET route that sends variables (data) to the frontend
app.get('/api/params', (req, res) => {
  const params = {
    seed: 0,
        terrain : {
            scale: 300,
            magnitude: 0.05,
            offset: 0.75
        },
  };

  res.json(params);  // Send the user data as JSON
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

