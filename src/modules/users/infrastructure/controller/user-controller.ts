import { inject } from 'inversify';
import { Request } from 'express';
import {
  controller,
  httpGet,
  BaseHttpController,
  httpPost,
} from 'inversify-express-utils';
import { USER_TYPE } from '@core/container/service-identifier/';
import { IGetUserUseCase } from '@users/useCase/get-user-use-case';
import { ICreateUserUseCase } from '@users/useCase/create-user-use-case';
import { HTTPStatusCode } from '@src/config/HTTPStatusCode.config';
@controller('/user')
export class UserController extends BaseHttpController {
  @inject(USER_TYPE.GetUserUseCase)
  private readonly getUserUseCase: IGetUserUseCase;

  @inject(USER_TYPE.CreateUserUseCase)
  private readonly createUserUseCase: ICreateUserUseCase;

  @httpGet('/')
  public async get() {
    const statusCode = HTTPStatusCode.SuccessOK;

    const response = await this.getUserUseCase.execute(null);

    return this.json(response, statusCode);
  }

  @httpPost('/')
  public async create(req: Request) {
    const statusCode = HTTPStatusCode.SuccessOK;

    const command = {
      ...req.body,
    };

    const response = await this.createUserUseCase.execute(command);

    return this.json(response, statusCode);
  }
}
