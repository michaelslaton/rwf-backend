
 exports.up = function (knex) {
  return knex.schema.createTable("belts", (table) => {
    table.increments("belt_id").primary().unsigned()
    table.string("title").notNullable()
    table.timestamps(true, true);
  });
};
 
exports.down = function (knex) {
  return knex.schema.dropTable("belts");
};
