const environment = 'development';
const config = require("../../knexfile")[environment];
const knexfile = require("knex")(config);

module.exports = knex;