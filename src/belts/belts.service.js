const knex = require("../db/connection");

function createBelt(newBelt){
  return knex("belts")
  .insert(newBelt)
  .returning("*")
  .then((createdRecords) => createdRecords[0])
}

function listBelts(){
  return knex("belts")
  .select("*")
  .orderBy("belt_id");
}

function readBelt(belt_id){
  return knex("belts")
  .select("*")
  .where({ belt_id })
  .first();
}

function updateBelt(updatedBelt) {
  return knex("belts")
    .select("*")
    .where({ belt_id: updatedBelt.belt_id })
    .update(updatedBelt, "*");
}

function destroy(belt_id) {
  return knex("belts")
    .where({ belt_id })
    .del();
}

module.exports = {
  createBelt,
  listBelts,
  readBelt,
  updateBelt,
  destroy,
};