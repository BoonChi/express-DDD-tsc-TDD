import mongoose from 'mongoose';
import UserSeeder from '@users/infrastructure/database/user.seeder';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoMemoryServerOption } from '@src/config/mongoose.config';
let mongoServer: MongoMemoryServer;
/**
 * Connect to a new in-memory database before running any tests
 */
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, MongoMemoryServerOption);
  await UserSeeder.execute();
});

/**
 * Remove and close the db and server.
 */
afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});
