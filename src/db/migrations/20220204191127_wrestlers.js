
 exports.up = function (knex) {
  return knex.schema.createTable("wrestlers", (table) => {
    table.increments("wrestler_id").primary().unsigned()
    table.string("name").notNullable()
    table.string("gender").notNullable()
    table.string("weight").notNullable()
    table.string("height").notNullable()
    table.text("backstory")
    table.string("img_url")
    table.integer("team_id").defaultTo(null).unsigned()
    table.foreign("team_id")
         .references("team_id")
         .inTable("teams")
         .onDelete("CASCADE")
    table.integer("belt_id").defaultTo(null).unsigned()
    table.foreign("belt_id")
          .references("belt_id")
          .inTable("belts")
          .onDelete("CASCADE")
    table.integer("wins").defaultTo(0)
    table.integer("losses").defaultTo(0)
    table.integer("creator").defaultTo(0).notNullable()
          .references("user_id")
          .inTable("users")
         .onDelete("CASCADE")
    table.timestamps(true, true);
  });
};
 
exports.down = function (knex) {
  return knex.schema.dropTable("wrestlers");
};
