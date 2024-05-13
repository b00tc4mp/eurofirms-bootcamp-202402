import { Schema, model } from 'mongoose';

const reportSearchSchema = new Schema(
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
    search: {
      ref: 'Search',
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default model('ReportSearch', reportSearchSchema);
