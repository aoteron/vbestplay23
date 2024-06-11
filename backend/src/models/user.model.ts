import { Schema, model } from 'mongoose';

interface IVote {
  game: Schema.Types.ObjectId;
  score: number;
}

interface IUserSchema {
  username: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  votes: IVote[];
  comments: Schema.Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

const VoteSchema = new Schema<IVote>(
  {
    game: {
      type: Schema.Types.ObjectId,
      ref: 'Game',
      required: true,
    },
    score: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
  },
  { _id: false },
);

const userSchema = new Schema<IUserSchema>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
      required: true,
    },
    votes: [VoteSchema],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const UserModel = model<IUserSchema>('User', userSchema);

export default UserModel;
