const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Controllers
const generateQRCodeController = require('./controllers/generateQRCodeController');

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 4444;

app
  .post('/api/generate-qr-code', generateQRCodeController);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

module.exports = app;