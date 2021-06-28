import knex, { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

export default class BaseDatebase {
  protected static knexConnection: Knex = knex({
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: Number(process.env.DB_PORT) || 3306,
      multipleStatements: true,
    },
  });

  public static closeConnection() {
    this.knexConnection.destroy();
  }
}
