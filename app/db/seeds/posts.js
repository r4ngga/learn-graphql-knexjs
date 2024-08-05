const faker = require('Faker');
const generateData = Array(10).fill(0).map((_,i) => {
  return { title: faker.lorem.words(), content: faker.lorem.paragraphs(), slug: faker.lorem.slug()}
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    generateData
  ]);
};
