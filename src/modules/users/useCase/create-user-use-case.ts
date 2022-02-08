
import { UseCase } from "@core/domain/i-use-case";
import { ICreateUserCommand } from "./i-create-user-command";

type ICreateUserResponse = void

export class CreateUserUseCase implements UseCase<ICreateUserCommand, ICreateUserResponse> {
  async execute(command: ICreateUserCommand): Promise<ICreateUserResponse> {

  }

}