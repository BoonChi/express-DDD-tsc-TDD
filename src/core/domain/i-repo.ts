export interface Repo<T> {
  delete(t: T): Promise<boolean>;
  save(t: T): Promise<T>;
}
