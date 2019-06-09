const joi = require('@hapi/joi');
const db = require('./index');

const tableName = 'project';

const readSchema = joi
  .object({
    userID: joi.string().uuid(),
  })
  .required();

async function read(params) {
  const selection = joi.attempt(params, readSchema);

  const user = await db('user')
    .where(selection)
    .select()
    .first();
  return db(tableName)
    .where({
      author: user.id,
    })
    .select();
}

module.exports = {
  tableName,
  read,
};
