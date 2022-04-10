
 exports.up = function (knex) {
  return knex.schema.createTable("belts", (table) => {
    table.increments("belt_id").primary()
    table.string("title").notNullable()
    table.string("img_url")
    table.timestamps(true, true);
  });
};
 
exports.down = function (knex) {
  return knex.schema.dropTable("belts");
};
