import 'reflect-metadata';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';

import { AddUserModule } from './add-user-module';

// set up container
const container = new Container();
// set up bindings
AddUserModule(container);
// create server
const inversifyExpressServer = new InversifyExpressServer(container, null, {
  rootPath: '/api/',
});
export { container, inversifyExpressServer };
