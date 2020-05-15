exports.seed = async function(knex) {
  await knex("heroes").insert([
    {name: "Batman", universe: "DC"},
    {name: "Ironman", universe: "Marvel"},
    {name: "Thor", universe: "Marvel"},
    {name: "Superman", universe: "DC"}
  ])
}
