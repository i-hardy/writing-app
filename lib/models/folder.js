const joi = require('@hapi/joi');
const db = require('./index');

const tableName = 'folder';

const readSchema = joi
  .object({
    id: joi.number().integer(),
  })
  .required();

async function read(params) {
  const { id } = joi.attempt(params, readSchema);

  return db(tableName)
    .where({
      collection: id,
    })
    .select();
}

module.exports = {
  tableName,
  read,
};
