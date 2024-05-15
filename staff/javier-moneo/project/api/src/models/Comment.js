import { Schema, model } from 'mongoose';
import mongoosePagination from "mongoose-paginate-v2";

const commentSchema = new Schema(
  {
    edition: {
      ref: 'Edition',
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

commentSchema.plugin(mongoosePagination);

export default model('Comment', commentSchema);
