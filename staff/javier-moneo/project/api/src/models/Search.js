import { Schema, model } from 'mongoose';
import mongoosePagination from 'mongoose-paginate-v2';

const searchSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
    user: {
      ref: 'User',
      type: Schema.Types.ObjectId,
      required: true,
    },
    edition: {
      ref: 'Edition',
      type: Schema.Types.ObjectId,
      required: true,
    },
    tag: {
      ref: 'Tag',
      type: Schema.Types.ObjectId,
      required: true,
    },
    searcher: {
      ref: 'Searcher',
      type: Schema.Types.ObjectId,
      required: true,
    },
    searchType: {
      ref: 'SearchType',
      type: Schema.Types.ObjectId,
      required: true,
    },
    isBanned: {
      type: Boolean,
    },
    dateBanned: {
      type: Date,
    },
    ownerBan: {
      ref: 'User',
      type: Schema.Types.ObjectId,
    },
  },
  { timestamps: true, versionKey: false }
);

searchSchema.plugin(mongoosePagination);

export default model('Search', searchSchema);
