import { Entity } from "./Entity";
import { IDomainEvents } from "./i-domain-events";

export class AggregateRoot<T> extends Entity<T> {
  private _domainEvents: IDomainEvents[] = []

  get domainEvents(): IDomainEvents[] {
    return this._domainEvents
  }

  protected addDomainEvent(events: IDomainEvents) {
    this._domainEvents.push(events)
  }
}