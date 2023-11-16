module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/cars.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    useNullAsDefault: true,
  },

  staging: {},

  production: {},
};
