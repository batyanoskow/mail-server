require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const router = require('./router/index');
const https = require("https");
const bodyParser = require("body-parser")
const cors = require('cors');
app.use(express.json());
app.use(cors({ origin: true }));
app.use('/api', router);
app.use(bodyParser.raw({ inflate: true, limit: '100kb', type: 'text/plain' }))
const start = async () => {
    try {
        app.listen(PORT , () => console.log("http started"))
    } catch (e) {
        console.log(e);
    }
}

start()
