import { User } from "@users/domain/User";

export interface IUserRepo extends Repo<User> {
  getUserById(id: string): Promise<User>;
  findAllUser(): Promise<User[]>;
}