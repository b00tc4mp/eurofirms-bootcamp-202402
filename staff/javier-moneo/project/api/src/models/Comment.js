import { Schema, model } from 'mongoose';

const commentSchema = new Schema(
  {
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
    text: {
      type: String,
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

export default model('Comment', commentSchema);
