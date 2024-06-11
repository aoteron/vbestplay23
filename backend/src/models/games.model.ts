import { Schema, model } from 'mongoose';

interface IScore {
  user: Schema.Types.ObjectId;
  score: number;
}

interface IGameSchema {
  name: string;
  category: Schema.Types.ObjectId;
  image: string;
  votesCount: number;
  scores: IScore[];
  averageScore: number;
  comments: Schema.Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

const scoreSchema = new Schema<IScore>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
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

const gameSchema = new Schema<IGameSchema>(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    votesCount: {
      type: Number,
      default: 0,
    },
    scores: [scoreSchema],
    averageScore: {
      type: Number,
      default: 0,
    },
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

const GameModel = model<IGameSchema>('Game', gameSchema);

export default GameModel;
