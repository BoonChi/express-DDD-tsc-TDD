import { UseCase } from '@core/domain/i-use-case';
import { inject, injectable } from 'inversify';
import { User } from '@users/domain/User';
import { USER_TYPE } from '@core/container/service-identifier';
import { IUserRepo } from '@users/repo/i-user-repo';

type IGetUserResponse = User[];
export type IGetUserUseCase = UseCase<null, IGetUserResponse>;

@injectable()
export class GetUserUseCase implements IGetUserUseCase {
  @inject(USER_TYPE.UserRepo)
  private userRepo: IUserRepo;

  async execute(): Promise<IGetUserResponse> {
    return await this.userRepo.findAllUser();
  }
}
