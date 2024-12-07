import { Schema, model } from 'mongoose';

const searchTypeSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
  },
  { versionKey: false }
);

export default model('SearchType', searchTypeSchema);
