import { Schema, model } from 'mongoose';

const reportTagSchema = new Schema(
  {
    status: {
      type: String,
      required: true,
      enum: ['pending', 'discarded', 'accepted'],
      default: 'pending',
    },
    userOwnerReport: {
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
  },
  { timestamps: true, versionKey: false }
);

export default model('ReportTag', reportTagSchema);
