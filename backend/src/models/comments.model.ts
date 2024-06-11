import { Schema, model } from 'mongoose';

export interface ICommentSchema {
  username: Schema.Types.ObjectId;
  comment: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const commentSchema = new Schema<ICommentSchema>(
  {
    username: {
      type: Schema.Types.ObjectId,
      ref: 'username',
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      default: Date.now,
    },
  },
  { timestamps: true },
);

const CommentModel = model<ICommentSchema>('Comment', commentSchema);

export default CommentModel;
