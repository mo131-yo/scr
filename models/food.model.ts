import { models, model, Schema, Model } from "mongoose";

type Food = {
  title: string;
  price: string;
  product: string;
  poster_path: string;
};

const FoodSchema = new Schema<Food>(
  {
    title: { type: String, required: true },
    product: [{ type: String, required: true }],
    price: { type: String, required: true },
    poster_path: { type: String, required: true },
  },
  { timestamps: true },
);

export const FoodModel: Model<Food> =models["Foods"] || model("Foods", FoodSchema);
