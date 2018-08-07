exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {
        id: 1,
        name: 'TestUser1'
      },
      {
        id: 2,
        name: 'TestUser2'
      },
      {
        id: 3,
        name: 'TestUser3'
      }
    ]);
  });
};