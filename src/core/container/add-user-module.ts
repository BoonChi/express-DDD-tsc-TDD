import { IUserRepo } from "@users/repo/i-user-repo";
import { UserRepo } from "@users/repo/UserRepo";
import { ICreateUserUseCase, CreateUserUseCase } from "@users/useCase/create/create-user-use-case";
import { IGetUserUseCase, GetUserUseCase } from "@users/useCase/get/get-user-use-case";
import type { Container } from "inversify";
import { USER_TYPE } from "./service-identifier";
import '@users/infrastructure/controller/user-controller';
export const AddUserModule = (container: Container) => {
  /**
   * User case
   */
  container
    .bind<ICreateUserUseCase>(USER_TYPE.CreateUserUseCase)
    .to(CreateUserUseCase);
  container.bind<IGetUserUseCase>(USER_TYPE.GetUserUseCase).to(GetUserUseCase);
  /**
   * User repo
   */
  container.bind<IUserRepo>(USER_TYPE.UserRepo).to(UserRepo);
}