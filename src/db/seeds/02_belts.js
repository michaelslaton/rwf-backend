exports.seed = function (knex) {
  return knex("belts").insert([
    {
      title: "RWF Champion",
    },
    {
      title: "Casual Champion"
    },
    {
      title: "Tag Team Champion"
    }
    
  ]);
};


/*
  title
  wrestler_id
*/