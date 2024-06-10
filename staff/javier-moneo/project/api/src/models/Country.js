import { Schema, model } from 'mongoose';

const countrySchema = new Schema(
  {
    code: {
      type: String,
      unique: true,
      required: true,
    },
    nativeName: {
      type: String,
    },
  },
  { versionKey: false }
);

export default model('Country', countrySchema);
