/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function (t) {
        t.increments('id').primary();
        t.string('name', 255).notNullable();
        t.string('email', 100).notNullable();
        t.string('address', 255);
        t.string('phone',255);
        t.text('bio');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
