import { AggregateRoot } from "../AggregateRoot";
import { IDomainEvents } from "../i-domain-events";
import { UniqueEntityID } from "../UniqueEntityID";

export class DomainEvents extends AggregateRoot<IDomainEvents>{
  constructor(domainEventProps: IDomainEvents, id: UniqueEntityID) {
    super(domainEventProps, id)
  }

  get dateTimeOccurred() {
    return this.props.dateTimeOccurred
  }

  protected getAggregateId() {
    return this._id
  }
}