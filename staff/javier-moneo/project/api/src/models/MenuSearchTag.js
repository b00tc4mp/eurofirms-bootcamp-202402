import { Schema, model } from 'mongoose';

const menuSearchTagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    tag: {
      ref: 'Tag',
      type: Schema.Types.ObjectId,
      required: true,
    },
    edition: {
      ref: 'Edition',
      type: Schema.Types.ObjectId,
      required: true,
    },
    searchType: {
      ref: 'SearchType',
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default model('MenuSearchTag', menuSearchTagSchema);
