import type { Application, Response } from 'express';
import type { InversifyExpressServer } from 'inversify-express-utils';
import bodyParser from 'body-parser';
import Logger from '@core/logger';
import '@core/dotenv/ProcessEnv';
import { mongooseServer } from '@core/database/mongoose';
import { PORT } from './config/app.config';

class App {
  server: InversifyExpressServer;
  constructor(container: InversifyExpressServer) {
    this.server = container;
  }

  private build() {
    this.server.setConfig((app: Application) => {
      // add body parser
      app.use(
        bodyParser.urlencoded({
          extended: true,
        })
      );
      app.use(bodyParser.json());
    });

    this.server.setErrorConfig(app => {
      app.use((res: Response) => {
        res.status(500).send('Something broke!');
      });
    });

    return this.server.build();
  }

  public async start() {
    await mongooseServer.connect();
    const builtApp = this.build();
    builtApp.listen(PORT, (): void => {
      Logger.info(`Connected successfully on port ${PORT}`);
    });
  }
}

export default App;
