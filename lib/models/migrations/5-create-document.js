const tableName = 'document';

function up(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table
      .integer('id')
      .unsigned()
      .primary();
    table.integer('folder').notNullable();
    table
      .foreign('folder')
      .references('folder.id')
      .onDelete('CASCADE');
    table.integer('user').notNullable();
    table.uuid('documentID').notNullable();
    table.string('title');
    table.text('text');
  });
}

function down(knex) {
  return knex.schema.dropTableIfExists(tableName);
}

module.exports = {
  up,
  down,
};
