import { models, model, Schema, Model } from "mongoose";

type Card = {
  title: string;
  price: string;
  product: string;
  poster_path: string;
};

const CardSchema = new Schema<Card>(
  {
    title: { type: String, required: true },
    product: [{ type: String, required: true }],
    price: { type: String, required: true },
    poster_path: { type: String, required: true },
  },
  { timestamps: true },
);

export const CardModel: Model<Card> =
  models["Cards"] || model("Cards", CardSchema);
