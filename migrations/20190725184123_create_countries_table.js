exports.up = (knex) =>
  knex.schema.createTable('countries', (table) => {
    table.increments('id')
    table.string('name')
  }).then(() => console.log('Table created.'))
    .catch((error) => {
      console.log(error)
      throw error
    })
    .finally(() => {
      knex.destroy()
    })

exports.down = (knex) =>
  knex.schema.dropTableIfExists('countries')
