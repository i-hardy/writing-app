const faker = require('faker');
const uuid = require('uuid/v1');

const userCount = 10;

const collections = Array(80)
  .fill()
  .map((n, i) => {
    const index = i + 1;
    if (index > 40) return index - 40;
    return index;
  })
  .map((project, i) => ({
    id: i + 1,
    collectionID: uuid(),
    project,
    type: i < 40 ? 'draft' : 'notes',
  }));

const projects = Array(40)
  .fill()
  .map((n, i) => {
    const [draft, notes] = collections
      .filter(collection => collection.project === i + 1)
      .map(coll => coll.id);
    return {
      id: i + 1,
      author: Math.floor(Math.random() * userCount + 1),
      projectID: uuid(),
      draft,
      notes,
      name: faker.random.words(),
    };
  });

exports.seed = knex => knex('collection')
  .del()
  .then(() => knex('collection').insert(collections))
  .then(() => knex('project').del())
  .then(() => knex('project').insert(projects));
