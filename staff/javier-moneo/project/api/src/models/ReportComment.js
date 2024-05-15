import { Schema, model } from 'mongoose';

const reportCommentSchema = new Schema(
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
    comment: {
      ref: 'Comment',
      type: Schema.Types.ObjectId,
      required: true,
    },
    userOwnerReport: {
      ref: 'User',
      type: Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['pending', 'discarded', 'accepted'],
      default: 'pending',
    },
  },
  { timestamps: true, versionKey: false }
);

export default model('ReportComment', reportCommentSchema);
