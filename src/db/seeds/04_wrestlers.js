 exports.seed = function (knex) {
  return knex("wrestlers").insert([
    {
      name: "Ren",
      gender: "Male",
      weight: "100lbs",
      height: "6ft",
      creator: 3,
      backstory: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus harum optio unde earum atque. Atque dicta itaque sint deleniti eaque, facere voluptates incidunt harum distinctio, quibusdam quidem dolore magni unde?",
    },
    {
      name: "White Lightning",
      gender: "Male",
      weight: "100lbs",
      height: "6ft",
      creator: 1,
      backstory: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus harum optio unde earum atque. Atque dicta itaque sint deleniti eaque, facere voluptates incidunt harum distinctio, quibusdam quidem dolore magni unde?",
    },
    {
      name: "Don Cheto",
      gender: "Male",
      weight: "100lbs",
      height: "6ft",
      creator: 2,
      backstory: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus harum optio unde earum atque. Atque dicta itaque sint deleniti eaque, facere voluptates incidunt harum distinctio, quibusdam quidem dolore magni unde?",
    },
    {
      name: "Quango",
      gender: "Male",
      weight: "100lbs",
      height: "6ft",
      creator: 4,
      backstory: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus harum optio unde earum atque. Atque dicta itaque sint deleniti eaque, facere voluptates incidunt harum distinctio, quibusdam quidem dolore magni unde?",
    },
    {
      name: "Todd",
      gender: "Male",
      weight: "100lbs",
      height: "6ft",
      creator: 5,
      backstory: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus harum optio unde earum atque. Atque dicta itaque sint deleniti eaque, facere voluptates incidunt harum distinctio, quibusdam quidem dolore magni unde?",
    },
    {
      name: "Grrb",
      gender: "Male",
      weight: "100lbs",
      height: "6ft",
      creator: 3,
      backstory: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus harum optio unde earum atque. Atque dicta itaque sint deleniti eaque, facere voluptates incidunt harum distinctio, quibusdam quidem dolore magni unde?",
    }
  ]);
};


/*
  name
  gender
  weight
  height
  backstory
*/