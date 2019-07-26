exports.up = (knex) =>
  knex.schema.createTable('songs', (table) => {
    table.increments('id')
    table.string('name')
    table.string('author')
    table.string('genre')
    table.integer('length')
    table.integer('release_date')
  }).then(() => console.log('Table created.'))
    .catch((error) => {
      console.log(error)
      throw error
    })
    .finally(() => {
      knex.destroy()
    })

exports.down = (knex) =>
  knex.schema.dropTableIfExists('songs')
