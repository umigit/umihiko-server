interface dbConfig {
  development: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: string;
  };
  production: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: string;
  };
  test: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: string;
  };
}

interface BBB {
  a: string;
}
