module.exports = {
  HOST: "localhost",
  DB: "companyProject",
  USER: "root",
  PASSWORD: "root",
  DIALECT: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000,
  },
};
