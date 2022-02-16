export interface Repo<T> {
  delete(t: T): Promise<Boolean>;
  save(t: T): Promise<T>;
}
