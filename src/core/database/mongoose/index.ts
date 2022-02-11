import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Logger from '@core/logger';
import {
  MongoMemoryServerOption,
  mongooseOptions,
} from '@src/config/mongoose.config';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

const url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

export class mongooseServer {
  public static async connect() {
    try {
      await mongoose.connect(url, mongooseOptions);
      Logger.info(`Successfully connected to ${url}`);
    } catch (error) {
      Logger.error(error, 'MongoDB connection error:');
    }
  }

  public static async connectMemoryServer() {
    const mongoServer = await MongoMemoryServer.create();

    // This will create an new instance of "MongoMemoryServer" and automatically start it
    await MongoMemoryServer.create();

    await mongoose.connect(mongoServer.getUri(), MongoMemoryServerOption);
  }

  public static setAutoReconnect() {
    mongoose.connection.on('disconnected', () => this.connect());
  }

  public static async disconnect() {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoose.disconnect();
  }

  public static async clearDatabase() {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  }
}
