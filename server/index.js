const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
const port = 5000;

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.get('/', (req, res) => {
    // TODO: Serve the client app here
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
