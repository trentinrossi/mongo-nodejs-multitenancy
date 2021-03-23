const { config } = require('dotenv');
const { ok } = require('assert');
const { join } = require('path');
const { handleError } = require('./_shared/handlers/errorHandler');
const bodyParser = require('body-parser');

const env = process.env.NODE_ENV || 'dev';
ok(env === 'prod' || env === 'dev', 'Invalid environment');

const configPath = join(__dirname, './config', `.env.${env}`);
config({
  path: configPath,
});

const express = require('express');
const mongoose = require('mongoose');
const personRoutes = require('./features/person/person.routes');

const app = express();
const port = process.env.PORT || process.env.SERVICE_PORT;

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/person', personRoutes);

// Handlers Middlewares
app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(port, '0.0.0.0');

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

console.log(`Running on port ${port}`);

module.exports = app; // Only to use in tests
