exports.up = (knex) =>
  knex.schema.createTable('regions', (table) => {
    table.increments('id')
    table.string('name')
    table
      .integer('country_id')
      .unsigned()
      .references('id')
      .inTable('countries')
  }).then(() => console.log('Table created.'))
    .catch((error) => {
      console.log(error)
      throw error
    })
    .finally(() => {
      knex.destroy()
    })

exports.down = (knex) =>
  knex.schema.dropTableIfExists('regions')
