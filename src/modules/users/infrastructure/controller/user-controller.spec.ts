import sinon from 'sinon';
import { USER_TYPE } from '@core/container/service-identifier/users';
import { UserController } from './user-controller';
import {
  GetUserUseCase,
  IGetUserUseCase,
} from '@users/useCase/get-user-use-case';
import { container } from '@core/container/inversify-container';
import { HTTPStatusCode } from '@src/config/HTTPStatusCode.config';

describe('userController', () => {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  let userController: any = null;
  let getUserStub: sinon.SinonStubbedInstance<IGetUserUseCase>;
  const mockUserArray = [
    {
      name: 'test',
      password: '123456',
      email: 'jestAcc@gmail.com',
    },
  ];
  beforeEach(async () => {
    getUserStub = sinon.createStubInstance<IGetUserUseCase>(GetUserUseCase);

    /* eslint-disable  @typescript-eslint/no-explicit-any */
    getUserStub.execute = sinon.stub(() => {
      return mockUserArray;
    }) as any;

    container
      .rebind<IGetUserUseCase>(USER_TYPE.GetUserUseCase)
      .toConstantValue(getUserStub);
    userController = new UserController();
  });
  describe('get user', () => {
    it('should return array of users', async () => {
      userController.getUserUseCase = getUserStub;
      const response = await userController.get();
      expect(response).toBeDefined();
      expect(response.json).toEqual(mockUserArray);
    });

    it('should return statusCode', async () => {
      userController.getUserUseCase = getUserStub;
      const response = await userController.get();
      expect(response).toBeDefined();
      expect(response.statusCode).toEqual(HTTPStatusCode.SuccessOK);
    });
  });
});
