After pull / clone this project

please running npm install

- npm install faker
- running knex migrate:up
- running knex seed:run

ATTENTIION
you must check knexfile.js, and change type & database connection 

in development 
if you wanna custom directory please change in development knexfile.js
 migrations: {
      directory: __dirname + '/app/db/migrations'
 },
 seeds: {
      directory: __dirname + '/app/db/seeds'
 },

