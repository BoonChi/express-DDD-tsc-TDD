export interface Repo<T> {
  delete(t: T): Promise<T>;
  save(t: T): Promise<T>;
}
