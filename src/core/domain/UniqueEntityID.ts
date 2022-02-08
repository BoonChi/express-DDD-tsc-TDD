import { randomUUID } from "crypto";

export class UniqueEntityID {
  id: string = randomUUID()
}