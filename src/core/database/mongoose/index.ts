import Logger from '@core/logger';
import UserSeeder from '@users/infrastructure/database/user.seeder';
import mongoose from 'mongoose';
import { mongooseOptions } from '@src/config/mongoose.config';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

const url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

export class mongooseServer {
  public static async connect() {
    try {
      await mongoose.connect(url, mongooseOptions);
      Logger.info(`Successfully connected to ${url}`);
      const userSeeder = await UserSeeder.execute();
      Logger.info(`Successfully created seeder ${userSeeder}`);
    } catch (error) {
      Logger.error(error, 'MongoDB connection error:');
    }
  }

  public static setAutoReconnect() {
    mongoose.connection.on('disconnected', () => this.connect());
  }

  public static async disconnect() {
    await mongoose.connection.close();
  }
}
