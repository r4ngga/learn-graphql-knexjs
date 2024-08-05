const faker = require('Faker');
const generateData = Array(10).fill(0).map((_,i) => {
  return { name: faker.name.findName(), email: faker.internet.email(), address: faker.address.streetName(), phone: faker.phone.phoneNumber(), bio: faker.name.jobTitle()}
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    generateData
  ]);
};
