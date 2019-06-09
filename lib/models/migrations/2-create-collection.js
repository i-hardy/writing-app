const tableName = 'collection';

function up(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table
      .integer('id')
      .unsigned()
      .primary();
    table.integer('project').notNullable();
    table.uuid('collectionID').notNullable();
    table.enu('type', ['draft', 'notes']).notNullable();
  });
}

function down(knex) {
  return knex.schema.dropTableIfExists(tableName);
}

module.exports = {
  up,
  down,
};
