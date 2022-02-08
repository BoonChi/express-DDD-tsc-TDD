import { UniqueEntityID } from "./UniqueEntityID";

export interface IDomainEvents {
  dateTimeOccurred: Date;
  getAggregateId(): UniqueEntityID;
}