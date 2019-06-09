const joi = require('@hapi/joi');
const db = require('./index');

const tableName = 'user';

const readSchema = joi
  .object({
    userID: joi.string().uuid(),
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
