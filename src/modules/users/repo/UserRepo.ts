import { User } from "@users/domain/User";
import UserModel from "@users/infrastructure/database/users.db.model";
import { injectable } from "inversify";
import { IUserRepo } from "./i-user-repo";

@injectable()
export class UserRepo implements IUserRepo {
  async getUserById(id: string): Promise<User> {
    return await UserModel.findById(id)
  }
  async findAllUser(): Promise<User[]> {
    return await UserModel.find()
  }
  async delete(user: User): Promise<boolean> {
    const result = await UserModel.deleteOne({ id: user._id })
    return !!result === true
  }
  async save(user: User): Promise<User> {
    return await UserModel.findOneAndUpdate({ email: user.props.email }, user, {
      new: true,
      upsert: true
    });
  }

}