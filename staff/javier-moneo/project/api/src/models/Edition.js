import { Schema, model } from 'mongoose';

const editionSchema = new Schema(
  {
    code: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      unique: true,
    },
    language: {
      ref: 'Language',
      type: Schema.Types.ObjectId,
      required: true,
    },
    country: {
      ref: 'Country',
      type: Schema.Types.ObjectId,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default model('Edition', editionSchema);
