const faker = require('faker');
const { loremIpsum } = require('lorem-ipsum');
const uuid = require('uuid/v1');

const folderCount = 100;

const documents = Array(500)
  .fill()
  .map((n, i) => ({
    id: i + 1,
    folder: Math.floor(Math.random() * folderCount + 1),
    documentID: uuid(),
    title: faker.random.words(),
    text: loremIpsum({
      count: Math.floor(Math.random() * 10 + 1),
      format: 'html',
      paragraphLowerBound: 3,
      paragraphUpperBound: 7,
      random: Math.random,
      sentenceLowerBound: 5,
      sentenceUpperBound: 15,
      units: 'paragraphs',
    }),
  }));

exports.seed = knex => knex('document')
  .del()
  .then(() => knex('document').insert(documents));
