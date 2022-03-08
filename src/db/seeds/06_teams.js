exports.seed = function (knex) {
  return knex("teams").insert([
    {
      name: "Unaffiliated",
      active: null,
    },
    {
      name: "Big Bad Money",
    },
    {
      name: "Col Nation",
    },
    {
      name: "Cyber Initiative",
    },
  ]);
};

/*
  name
  active // boolean
*/