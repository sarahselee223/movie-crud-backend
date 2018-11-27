
exports.up = function(knex) {
    return knex.schema.createTable('movies', table => {
        table.increments()
        table.string('title').notNullable()
        table.string('director').notNullable()
        table.integer('year').notNullable()
        table.integer('rating').notNullable()
        table.text('url').notNullable()
        table.timestamps(true, true)
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('movies')
};
