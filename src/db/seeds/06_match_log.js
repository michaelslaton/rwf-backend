exports.seed = function (knex) {
  return knex("match_log").insert([
    {
      wrestler_1: 1,
      wrestler_2: 2,
      match_type_id: 1,
      belt_id: 1,
      winner: 1,
      date: "2022-3-19"
    },
    {
      team_1: 2,
      team_2: 1,
      match_type_id: 2,
      winner: 3,
      date: "2022-3-19"
    }
  ]);
};

/*
  match_id
  wrestler_id
  macth_type_id
  belt_id // nullable
  winner // boolean
*/