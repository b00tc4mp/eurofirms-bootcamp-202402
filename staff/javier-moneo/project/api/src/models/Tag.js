import { Schema, model } from 'mongoose';

const tagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    isBanned: {
      type: Boolean,
    },
    edition: {
      ref: 'Edition',
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default model('Tag', tagSchema);
