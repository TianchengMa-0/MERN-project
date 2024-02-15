const express = require('express');
const cors = require('cors');
const signup = require('./api/signup'); // Require the routes
const login = require('./api/login'); // Require the routes

const app = express();
const port = 3000;

app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3001',
};
app.use(cors(corsOptions));

app.use('/backend', signup);
app.use('/backend', login);


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
