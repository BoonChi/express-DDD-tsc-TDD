import { mongooseServer } from '@core/database/mongoose';
import UserSeeder from '@users/infrastructure/database/user.seeder';

/**
 * Connect to a new in-memory database before running any tests
 */
beforeAll(async () => {
  await mongooseServer.connectMemoryServer();
  /**
   * Insert seeders
   */
  await UserSeeder.execute();
});

/**
 * Remove and close the db and server.
 */
afterAll(async () => await mongooseServer.disconnect());
