import { Schema, model } from 'mongoose';
import mongoosePagination from 'mongoose-paginate-v2';

const reportUserSchema = new Schema(
  {
    status: {
      type: String,
      required: true,
      enum: ['pending', 'discarded', 'accepted'],
      default: 'pending',
    },
    user: {
      ref: 'User',
      type: Schema.Types.ObjectId,
      required: true,
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
  },
  { timestamps: true, versionKey: false }
);

reportUserSchema.plugin(mongoosePagination);

export default model('ReportUser', reportUserSchema);
