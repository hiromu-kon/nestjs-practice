export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // entities:
    //   process.env.NODE_ENV === 'develop'
    //     ? entities
    //     : ['src/**/**.entity{.ts,.js}'],
    synchronize: process.env.NODE_ENV === 'development' ? true : false,
  },
});
