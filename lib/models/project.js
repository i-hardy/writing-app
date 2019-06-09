const joi = require('@hapi/joi');
const db = require('./index');

const tableName = 'project';

const readSchema = joi
  .object({
    userID: joi.string().uuid(),
    projectID: joi.string().uuid(),
  })
  .xor(['userID', 'projectID'])
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
