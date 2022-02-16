import { Schema, model } from 'mongoose';

export interface IUserDocument {
  name: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema<IUserDocument>({
  email: { type: Schema.Types.String, required: true },
  name: { type: Schema.Types.String, required: true },
  password: { type: Schema.Types.String, required: true },
});

export default model<IUserDocument>('User', UserSchema);
