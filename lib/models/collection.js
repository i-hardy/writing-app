const joi = require('@hapi/joi');
const db = require('./index');

const tableName = 'collection';

const readSchema = joi
  .object({
    id: joi.number().integer(),
  })
  .required();

async function read(params) {
  const selection = joi.attempt(params, readSchema);

  return db(tableName)
    .where(selection)
    .select()
    .first();
}

module.exports = {
  tableName,
  read,
};
