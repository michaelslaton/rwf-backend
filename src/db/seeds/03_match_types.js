exports.seed = function (knex) {
  return knex("match_types").insert([
    {
      name: "Standard"
    },
    {
      name: "Tag Team"
    }
  ]);
};

/*
  name
*/