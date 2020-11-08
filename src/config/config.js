module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'database_development',
    host: 'db',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'postgres',
    database: 'database_test',
    host: 'db',
    dialect: 'postgres',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
