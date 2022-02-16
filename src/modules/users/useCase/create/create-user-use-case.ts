import { UseCase } from '@core/domain/i-use-case';
import { inject, injectable } from 'inversify';
import { ICreateUserCommand } from './i-create-user-command';
import { USER_TYPE } from '@core/container/service-identifier';
import { IUserRepo } from '@users/repo/i-user-repo';
import { User } from '@users/domain/User';

type ICreateUserResponse = User;

export type ICreateUserUseCase = UseCase<
  ICreateUserCommand,
  ICreateUserResponse
>;

@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  @inject(USER_TYPE.UserRepo)
  private userRepo: IUserRepo;
  async execute(command: ICreateUserCommand): Promise<ICreateUserResponse> {
    const user = new User(command);
    return await this.userRepo.save(user);
  }
}
