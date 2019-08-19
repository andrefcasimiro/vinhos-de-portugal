exports.up = (knex) =>
  knex.schema.createTable('wines', (table) => {
    table.increments('id')
    table.string('name')
    table.string('type')
    table.string('producer')
    table
      .integer('region_id')
      .unsigned()
      .references('id')
      .inTable('regions')
    table.string('grape')
    table.integer('alcohol')
    table.integer('price_range_per_750_ml_bottle')
    table.string('food_suggestion')
  }).then(() => console.log('Table created.'))
    .catch((error) => {
      console.log(error)
      throw error
    })
    .finally(() => {
      knex.destroy()
    })

exports.down = (knex) =>
  knex.schema.dropTableIfExists('wines')
