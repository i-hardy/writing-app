const joi = require('@hapi/joi');
const db = require('./index');

const tableName = 'document';

const readSchema = joi
  .object({
    id: joi.number().integer(),
  })
  .required();

async function read(params) {
  const { id } = joi.attempt(params, readSchema);

  return db(tableName)
    .where({
      folder: id,
    })
    .select();
}

module.exports = {
  tableName,
  read,
};
