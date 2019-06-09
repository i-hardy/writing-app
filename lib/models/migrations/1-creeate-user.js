const tableName = 'user';

function up(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table
      .integer('id')
      .unsigned()
      .primary();
    table.uuid('userID').notNullable();
    table.string('name').notNullable();
  });
}

function down(knex) {
  return knex.schema.dropTableIfExists(tableName);
}

module.exports = {
  up,
  down,
};
