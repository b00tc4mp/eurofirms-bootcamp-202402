import { Schema, model } from 'mongoose';

const searcherSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    alias: {
      type: String,
      unique: true,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    searcherType: {
      ref: 'SearcherType',
      type: Schema.Types.ObjectId,
      required: true,
    },
    searchTypes: [
      {
        ref: 'SearchType',
        type: Schema.Types.ObjectId,
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

export default model('Searcher', searcherSchema);
