import { Schema, model } from 'mongoose';

const menuSearchTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    searcher: {
      ref: 'Searcher',
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

export default model('MenuSearchType', menuSearchTypeSchema);
