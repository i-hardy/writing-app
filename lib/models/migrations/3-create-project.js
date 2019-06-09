const tableName = 'project';

function up(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table
      .integer('id')
      .unsigned()
      .primary();
    table.integer('author').notNullable();
    table
      .foreign('author')
      .references('user.id')
      .onDelete('CASCADE');
    table.integer('draft').notNullable();
    table.foreign('draft').references('collection.id');
    table.integer('notes').notNullable();
    table.foreign('notes').references('collection.id');
    table.uuid('projectID').notNullable();
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
