export const config = () => ({
  port: Number(process.env.PORT),
  database: {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.NODE_ENV === 'development' ? true : false,
    logging: false,
    entities: ['dist/**/*.entity.ts']
  }
})
