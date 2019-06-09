const path = require('path');
const joi = require('@hapi/joi');
const { parse } = require('pg-connection-string');

const envVarsSchema = joi
  .object({
    PG_URI: joi
      .string()
      .uri({ scheme: 'postgres' })
      .required(),
  })
  .unknown()
  .required();

const envVars = joi.attempt(process.env, envVarsSchema);

const config = {
  client: 'pg',
  connection: parse(envVars.PG_URI),
  migrations: {
    directory: path.join(__dirname, './migrations'),
  },
};

module.exports = config;
