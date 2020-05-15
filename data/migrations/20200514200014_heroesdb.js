exports.up = async function(knex) {
    await knex.schema.createTable("heroes", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("universe").notNull()
    })
  }
  
  exports.down =  async function(knex) {
      await knex.schema.dropTableIfExists("heroes")
  }
  
