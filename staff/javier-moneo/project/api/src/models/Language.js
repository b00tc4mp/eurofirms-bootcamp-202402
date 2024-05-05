import { Schema, model } from 'mongoose';

const languageSchema = new Schema(
  {
    code: {
      type: String,
      unique: true,
    },
    languageNative: {
      type: String,
    },
  },
  { versionKey: false }
);

export default model('Language', languageSchema);
