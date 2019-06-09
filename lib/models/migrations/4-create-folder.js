const tableName = 'folder';

function up(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table
      .integer('id')
      .unsigned()
      .primary();
    table.integer('collection').notNullable();
    table
      .foreign('collection')
      .references('collection.id')
      .onDelete('CASCADE');
    table.uuid('folderID').notNullable();
    table.string('name');
  });
}

function down(knex) {
  return knex.schema.dropTableIfExists(tableName);
}

module.exports = {
  up,
  down,
};
