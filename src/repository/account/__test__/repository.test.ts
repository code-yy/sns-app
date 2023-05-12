import type { CreateParams, CreateResponse } from '../interface';

describe('AccountRepository', () => {
  describe('create', () => {
    /**
     * @description accountRepository.createメソッドがapiClient.postを正しく呼び出し、そのレスポンスが返されることを確認されていることがわかるテスト
     **/
    test('success', async () => {
      const response: CreateResponse = {
        user: {
          id: 1,
          name: 'test',
          email: 'example@gmail.com',
          iconImageUrl: undefined,
        },
        token: 'token',
      };

      const params: CreateParams = {
        name: 'test',
        email: 'example@gmail.com',
        password: 'password',
      };

      const apiClientMock = {
        post: jest.fn().mockResolvedValue(response),
      };

      const res = await apiClientMock.post('/account', params);

      expect(apiClientMock.post).toHaveBeenCalledWith('/account', params);
      expect(res).toEqual(response);
    });
  });
});
