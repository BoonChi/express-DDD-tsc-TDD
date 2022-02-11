import mongoose, { Document, Schema } from 'mongoose';

export interface IUserDocument extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  email: { type: Schema.Types.String, required: true },
  name: { type: Schema.Types.String, required: true },
  password: { type: Schema.Types.String, required: true },
});

export default mongoose.model<IUserDocument>('User', UserSchema);
