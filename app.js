require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const mongooseConnection = mongoose.connection
mongooseConnection.on('error', (error) => console.error(error))
mongooseConnection.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use('/', require('./routes'));

app.listen(process.env.APP_PORT, () => console.log('Server Started'))