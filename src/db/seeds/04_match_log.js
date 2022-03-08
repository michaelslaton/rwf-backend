exports.seed = function (knex) {
  return knex("match_log").insert([
    {
      match_id: 1,
      wrestler_id: 1,
      match_type_id: 1,
      belt_id: 1,
      winner: true,
    },
    {
      match_id: 1,
      wrestler_id: 2,
      match_type_id: 1,
      belt_id: 1,
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