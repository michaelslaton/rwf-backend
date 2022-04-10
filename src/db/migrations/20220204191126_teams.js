
 exports.up = function (knex) {
  return knex.schema.createTable("teams", (table) => {
    table.increments("team_id").primary()
    table.string("name").notNullable()
    table.boolean("active").defaultTo(true)
    table.string("img_url")
    table.integer("wins").defaultTo(0)
    table.integer("losses").defaultTo(0)
    table.timestamps(true, true);
  });
};
 
exports.down = function (knex) {
  return knex.schema.dropTable("teams");
};
