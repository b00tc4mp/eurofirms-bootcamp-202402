import { Schema, model } from 'mongoose';

const searcherTypeSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
  },
  { versionKey: false }
);

export default model('SearcherType', searcherTypeSchema);
