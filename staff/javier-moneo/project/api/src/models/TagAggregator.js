import { Schema, model } from 'mongoose';

const tagAgregatorSchema = new Schema(
  {
    service: {
      type: String,
      required: true,
    },
    url: {
      type: String,
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

export default model('TagAggregator', tagAgregatorSchema);
