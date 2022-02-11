import UserModel, {
  IUserDocument,
} from '@users/infrastructure/database/users.db.model';

class UserSeeder {
  public static async execute(): Promise<IUserDocument> {
    const user = await UserModel.create({
      name: 'test',
      password: '123456',
      email: 'testAcc@gmail.com',
    });
    const seeder = await user.save();
    return seeder;
  }
}

export default UserSeeder;
