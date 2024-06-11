import { Schema, model } from 'mongoose';

interface ICategorySchema {
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const categorySchema = new Schema<ICategorySchema>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
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

const CategoryModel = model<ICategorySchema>('Category', categorySchema);

export default CategoryModel;
