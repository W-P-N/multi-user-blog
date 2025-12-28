const express = require('express');
const dotenv = require('dotenv');
dotenv.config({
    path: './.env'
});

const blogApp = express();
const PORT = process.env.PORT;

blogApp.get('/', (req, res) => {
    res.send('Hello World!');
});

blogApp.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


