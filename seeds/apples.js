
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('apple_type').del()
    .then(function () {
      const apples_seed = [{
        color: 'green',
        name: 'granny smith',
        price: 115
      }, {
        color: 'red',
        name: 'red delicoius',
        price: 75
      }, {
        color: 'pink',
        name: 'pink ladies',
        price: 100
      }
    ]
    return knex('apple_type').insert(apples_seed);
  });

};
