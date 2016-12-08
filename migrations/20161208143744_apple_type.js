
exports.up = function(knex, Promise) {
  return knex.schema.createTable('apple_type', function(table){
    table.increments();
    table.string('color');
    table.string('name');
    table.integer('price');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('apple_type');
};
