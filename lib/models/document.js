const joi = require('@hapi/joi');
const db = require('./index');

const tableName = 'document';

const readSchema = joi
  .object({
    folder: joi.number().integer(),
    documentID: joi.string().uuid(),
  })
  .xor(['folder', 'documentID'])
  .required();

async function read(params) {
  const selection = joi.attempt(params, readSchema);

  return db(tableName)
    .where(selection)
    .select();
}

async function readOne(params) {
  const selection = joi.attempt(params, readSchema);

  return db(tableName)
    .where(selection)
    .select()
    .first();
}

module.exports = {
  tableName,
  read,
  readOne,
};
