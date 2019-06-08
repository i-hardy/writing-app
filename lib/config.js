if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  require('dotenv').config();
}

const joi = require('@hapi/joi');

const envSchema = joi
  .object({
    NODE_ENV: joi.string(),
    PORT: joi.number().port(),
    HOSTNAME: joi.string(),
  })
  .unknown();

let config = {};

joi.validate(process.env, envSchema, (err, value) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  }
  config = value;
});

module.exports = config;
