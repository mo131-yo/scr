import { models, model, Schema, Model } from "mongoose";

type Card = {
  foodName: string;
  foodPrice: string;
  product: string;
  foodImage: string;
};

const CardSchema = new Schema<Card>(
  {
    foodName: { type: String, required: true },
    product: [{ type: String, required: true }],
    foodPrice: { type: String, required: true },
    foodImage: { type: String},
  },
  { timestamps: true },
);

export const CardModel: Model<Card> =models["Cards"] || model("Cards", CardSchema);
