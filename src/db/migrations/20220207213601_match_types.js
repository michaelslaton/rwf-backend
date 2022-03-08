
 exports.up = function (knex) {
  return knex.schema.createTable("match_types", (table) => {
    table.increments("match_type_id").primary().unsigned().unique()
    table.string("name").notNullable()
    table.timestamps(true, true);
  });
};
 
exports.down = function (knex) {
  return knex.schema.dropTable("match_types");
};