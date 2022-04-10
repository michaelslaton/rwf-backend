
 exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("user_id").primary()
    table.string("creator_name").notNullable()
    table.string("username").notNullable()
    table.string("password").notNullable()
    table.timestamps(true, true);
  });
};
 
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
