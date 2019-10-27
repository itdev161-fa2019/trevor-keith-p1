import express from 'express';

// Initialize express application
const app = express();

// API endpoionts
app.get('/', (req, res) =>
    res.send('HTTP get request successfully sent to root API endpoint')
);

// Connection listener
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));