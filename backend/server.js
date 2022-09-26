const express = require('express');
const bodyParser = require('body-parser');
const formRoute = require('./routes/form.routes');
const cors = require('cors');
const app = express();
require('dotenv').config({ path: './config/.env' });
require('./config/db');
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/form', formRoute);





app.listen(process.env.PORT, () => {
  console.log(`connect on port ${process.env.PORT}`);
})