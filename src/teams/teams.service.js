const knex = require("../db/connection");

function createTeam(newTeam){
  return knex("teams")
    .insert(newTeam)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

function listTeams(){
  return knex("teams")
    .select("*")
    .orderBy("team_id");
}

function readTeam(team_id){
  return knex("teams")
    .select("*")
    .where({ team_id })
    .first();
}

function updateTeam(updatedTeam) {
  return knex("teams")
    .select("*")
    .where({ team_id: updatedTeam.team_id })
    .update(updatedTeam, "*");
}

function destroy(team_id) {
  return knex("teams")
    .where({ team_id })
    .del();
}

module.exports = {
  createTeam,
  listTeams,
  readTeam,
  updateTeam,
  destroy,
};