module.exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("wrestlers")
    .del()
    .then(() => knex("belts").del())
    .then(() => knex("match_types").del())
    .then(() => knex("match_log").del())
    .then(() => knex("users").del());
};
