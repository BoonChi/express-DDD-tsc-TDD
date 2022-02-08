import { UniqueEntityID } from "./UniqueEntityID"

export class Entity<T> {
  props: T
  _id: UniqueEntityID
  constructor(props: T, id?: UniqueEntityID) {
    this.props = props
    this._id = id || new UniqueEntityID()
  }
}