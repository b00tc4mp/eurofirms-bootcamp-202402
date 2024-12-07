import { Schema, model } from 'mongoose';

const searcherUrlSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    urlExample: {
      type: String,
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
    searcherType: {
      ref: 'SearcherType',
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

export default model('SearcherUrl', searcherUrlSchema);
