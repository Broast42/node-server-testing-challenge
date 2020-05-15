exports.seed = async function(knex) {
  await knex("heroes").truncate()
}
