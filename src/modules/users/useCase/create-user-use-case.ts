import { UseCase } from '@core/domain/i-use-case';
import { injectable } from 'inversify';
import { ICreateUserCommand } from './i-create-user-command';
import UserModel from '@users/infrastructure/database/users.db.model';

type ICreateUserResponse = string;

export type ICreateUserUseCase = UseCase<
  ICreateUserCommand,
  ICreateUserResponse
>;

@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  async execute(command: ICreateUserCommand): Promise<ICreateUserResponse> {
    await UserModel.create({ ...command });
    return 'SUCCESS';
  }
}
