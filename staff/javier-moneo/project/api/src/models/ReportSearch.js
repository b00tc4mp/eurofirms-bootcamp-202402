import { Schema, model } from 'mongoose';
import mongoosePagination from 'mongoose-paginate-v2';

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

reportSearchSchema.plugin(mongoosePagination);

export default model('ReportSearch', reportSearchSchema);
