import { AggregateRoot } from "@core/domain/AggregateRoot";
import { UniqueEntityID } from "@core/domain/UniqueEntityID";
import { UserCreatedEvent } from "./events/UserCreatedEvent";

export class User extends AggregateRoot<IUserProps> {
  private constructor(props: IUserProps, id?: UniqueEntityID) {
    super(props, id)
  }
  public create(props: IUserProps, id?: UniqueEntityID) {
    const user = new User(props)
    // await createUseCase(user)
    const idWasProvided = !!id

    if (!idWasProvided) {
      user.addDomainEvent(new UserCreatedEvent(user))
    }
  }
}