exports.up = function (knex) {
  return knex.schema.createTable("match_log", (table) => {
    table.integer("match_id").primary().unsigned().notNullable(); // Match Identifier
    table.integer("wrestler_id").unsigned(); // Wrestler
    table.foreign("wrestler_id")
      .references("wrestler_id")
      .inTable("wrestlers")
      .onDelete("CASCADE");
    table.integer("team_id").defaultTo(null).unsigned();
    table.foreign("team_id")
      .references("team_id")
      .inTable("teams")
      .onDelete("CASCADE");
    table.integer("match_type_id").unsigned().notNullable(); // Match Type
    table.foreign("match_type_id")
      .references("match_type_id")
      .inTable("match_types")
      .onDelete("CASCADE");
    table.integer("belt_id").defaultTo(null).unsigned(); // Belt
    table.foreign("belt_id")
      .references("belt_id")
      .inTable("belts")
      .onDelete("CASCADE");
    table.boolean("winner").defaultTo(false).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("match_log");
};
