import { Schema, model } from 'mongoose';
import bcryp from 'bcryptjs';

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        ref: 'Role',
        type: Schema.Types.ObjectId,
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcryp.genSalt(10);
  return await bcryp.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcryp.compare(password, receivedPassword);
};

export default model('User', userSchema);
