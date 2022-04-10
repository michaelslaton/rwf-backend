exports.up = function (knex) {
  return knex.schema.createTable("match_log", (table) => {
    table.increments("match_id").primary() // Match Identifier
    table.integer("wrestler_1") // Wrestler 1
      .references("wrestler_id")
      .inTable("wrestlers")
      .onDelete("CASCADE")
    table.integer("wrestler_2") // Wrestler 1
        .references("wrestler_id")
        .inTable("wrestlers")
        .onDelete("CASCADE")
    table.integer("team_1") // Team 1
      .references("team_id")
      .inTable("teams")
      .onDelete("CASCADE")
    table.integer("team_2") // Team 2
        .references("team_id")
        .inTable("teams")
        .onDelete("CASCADE")
    table.integer("match_type_id") // Match Type
      .references("match_type_id")
      .inTable("match_types")
      .onDelete("CASCADE")
    table.integer("belt_id") // Belt
      .references("belt_id")
      .inTable("belts")
      .onDelete("CASCADE")
    table.integer("winner").notNullable()
    table.text("summary")
    table.date("date").notNullable()
    table.timestamps(true, true)
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("match_log");
};
