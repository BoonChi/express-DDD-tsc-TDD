import "reflect-metadata";
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
// import { CreateUserUseCase } from "@users/useCase/create-user-use-case";
import { TYPE } from "@core/container/types/users"

// set up container
let container = new Container();
// set up bindings
// container.bind<CreateUserUseCase>(TYPE.CreateUserUseCase).to(CreateUserUseCase);

// create server
let server = new InversifyExpressServer(container);

export default server

