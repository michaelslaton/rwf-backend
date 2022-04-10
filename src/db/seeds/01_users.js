exports.seed = function (knex) {
  return knex("users").insert([
    {
      username: "Rem",
      creator_name: "Rembo",
      password: "money",
    },
    {
      username: "Bueno",
      creator_name: "Bueno",
      password: "taco",
    },
    {
      username: "Ren",
      creator_name: "Mike",
      password: "battits",
    },
    {
      username: "Quango",
      creator_name: "Quin",
      password: "Shoes",
    },
    {
      username: "Bagel",
      creator_name: "Wes",
      password: "Banana",
    }
  ]);
};

/*

*/