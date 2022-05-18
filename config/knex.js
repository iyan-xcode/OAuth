const conf = require("knex");

const knex = conf({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./mydb.sqlite",
  },
});

module.exports = knex;
