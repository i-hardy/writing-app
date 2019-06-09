const faker = require('faker');
const uuid = require('uuid/v1');

const collectionCount = 80;

const folders = Array(100)
  .fill()
  .map((n, i) => ({
    id: i + 1,
    collection: Math.floor(Math.random() * collectionCount + 1),
    folderID: uuid(),
    name: faker.random.words(),
  }));

exports.seed = knex => knex('folder')
  .del()
  .then(() => knex('folder').insert(folders));
