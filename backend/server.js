const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const searchRoute = require('./routes/search.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/search', searchRoute);

app.listen(PORT, () => {
    console.log(`Listening on port: http://localhost:${PORT}`);
});

