exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
    table.increments("id");
    table.string('vin', 128).notNullable().unique();
    table.string('make', 128).notNullable();
    table.string('model', 128).notNullable();
    table.decimal('mileage').notNullable();
    table.string('title', 128);
    table.string('transmission', 128);
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars");
};
