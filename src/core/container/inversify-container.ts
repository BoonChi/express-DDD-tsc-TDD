import 'reflect-metadata';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import {
  CreateUserUseCase,
  ICreateUserUseCase,
} from '@users/useCase/create-user-use-case';
import { USER_TYPE } from '@core/container/service-identifier/';
import {
  GetUserUseCase,
  IGetUserUseCase,
} from '@users/useCase/get-user-use-case';
import '@users/infrastructure/controller/user-controller';

// set up container
const container = new Container();
// set up bindings
container
  .bind<ICreateUserUseCase>(USER_TYPE.CreateUserUseCase)
  .to(CreateUserUseCase);
container.bind<IGetUserUseCase>(USER_TYPE.GetUserUseCase).to(GetUserUseCase);
// create server
const inversifyExpressServer = new InversifyExpressServer(container, null, {
  rootPath: '/api/',
});

export { container, inversifyExpressServer };
