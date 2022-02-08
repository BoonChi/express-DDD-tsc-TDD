import { IDomainEvents } from "@core/domain/i-domain-events";
import { UniqueEntityID } from "@core/domain/UniqueEntityID";
import { User } from "../User";

export class UserCreatedEvent implements IDomainEvents {
  public dateTimeOccurred: Date = new Date();
  public user: User;

  constructor(user: User) {
    this.user = user
  }

  getAggregateId(): UniqueEntityID {
    return this.user._id
  }
}