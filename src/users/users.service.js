const knex = require("../db/connection");

function listCreators(){
  return knex("users")
    .select("creator_name","user_id")
}

module.exports = {
  listCreators
};