import { Schema, model } from 'mongoose';

const voteSearchSchema = new Schema(
  {
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
    search: {
      ref: 'Search',
      type: Schema.Types.ObjectId,
      required: true,
    },
    user: {
      ref: 'User',
      type: Schema.Types.ObjectId,
      required: true,
    },
    isVoteUp: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default model('VoteSearch', voteSearchSchema);
