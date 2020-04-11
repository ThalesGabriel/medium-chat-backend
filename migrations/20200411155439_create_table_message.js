exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', table => {
    table.increments('id').primary()
    table.string('name').notNull()
    table.string('message').notNull()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages')
};
