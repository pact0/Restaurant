module.exports = {
  type: 'mysql',
  host: process.env.DB__HOST,
  port: process.env.DB__PORT,
  username: process.env.DB__USERNAME,
  password: process.env.DB__PASSWORD,
  database: process.env.DB__DATABASE,
  entities: ["src/**/**.entity{.ts,.js}"],
  synchronize: true
};
