// src/app.js
const express = require('express');
const morgan  = require('morgan');
const cors    = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/products.routes');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);

module.exports = app;
