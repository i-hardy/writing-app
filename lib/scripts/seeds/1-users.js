const faker = require('faker');
const uuid = require('uuid/v1');

const users = Array(10)
  .fill()
  .map((n, i) => ({
    id: i + 1,
    userID: uuid(),
    name: faker.internet.userName(),
  }));

exports.seed = knex => knex('user')
  .del()
  .then(() => knex('user').insert(users));
