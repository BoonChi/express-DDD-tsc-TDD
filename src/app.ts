import type {
  Application,
  ErrorRequestHandler,
  Request,
  Response,
} from 'express';
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

  private setup() {
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
      app.use((error: ErrorRequestHandler, req: Request, res: Response) => {
        res.status(404).send('Sorry, cant find that');
      });
    });

    return this.server.build();
  }

  public async start() {
    await mongooseServer.connect();
    const builtApp = this.setup();
    builtApp.listen(PORT, (): void => {
      Logger.info(`Connected successfully on port ${PORT}`);
    });
  }
}

export default App;
