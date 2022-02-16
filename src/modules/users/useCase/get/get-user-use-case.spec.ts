import { USER_TYPE } from '@core/container/service-identifier/';
import { IGetUserUseCase } from '@users/useCase/get/get-user-use-case';
import { container } from '@core/container/inversify-container';

describe('get user', () => {
  let GetUserUseCase: IGetUserUseCase = null;

  beforeEach(async () => {
    GetUserUseCase = container.get<IGetUserUseCase>(USER_TYPE.GetUserUseCase);
  });
  describe('execute', () => {
    it('should return array of users', async () => {
      const response = await GetUserUseCase.execute(null);
      expect(response).toBeDefined();
      expect(response[0]).toHaveProperty('email');
    });
  });
});
