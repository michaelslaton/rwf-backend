const knex = require("../db/connection");

function create(wrestler) {
  return knex("wrestlers")
    .insert(wrestler)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

function listWrestlers(){
  return knex("wrestlers")
    .select("*")
    .orderBy("name");
}

function readWrestler(wrestler_id){
  return knex("wrestlers")
    .select("*")
    .where({ wrestler_id })
    .first();
}

function updateWrestler(updatedWrestler) {
  return knex("wrestlers")
    .select("*")
    .where({ wrestler_id: updatedWrestler.wrestler_id })
    .update(updatedWrestler, "*");
}

function destroy(wrestler_id) {
  return knex("wrestlers")
    .where({ wrestler_id })
    .del();
}

module.exports = {
  create,
  listWrestlers,
  readWrestler,
  updateWrestler,
  destroy,
};