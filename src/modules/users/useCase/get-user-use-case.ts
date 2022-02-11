import { UseCase } from '@core/domain/i-use-case';
import { injectable } from 'inversify';
import UserModel from '@users/infrastructure/database/users.db.model';
import { User } from '@users/domain/User';

type IGetUserResponse = User[];
export type IGetUserUseCase = UseCase<null, IGetUserResponse>;

@injectable()
export class GetUserUseCase implements IGetUserUseCase {
  async execute(): Promise<IGetUserResponse> {
    return await UserModel.find();
  }
}
