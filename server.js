import express from 'express';
import connectDatabase from './config/db';

// Initialize express application
const app = express();

//Connect database
connectDatabase();

// API endpoionts
app.get('/', (req, res) =>
    res.send('HTTP get request successfully sent to root API endpoint')
    
);

// Connection listener
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));