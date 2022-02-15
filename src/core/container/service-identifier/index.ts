const USER_TYPE = {
  CreateUserUseCase: Symbol.for('CreateUserUseCase'),
  GetUserUseCase: Symbol.for('GetUserUseCase'),
};

const DATABASE_TYPE = {
  DB_SERVER: Symbol.for('DB_SERVER'),
};
export { USER_TYPE, DATABASE_TYPE };
