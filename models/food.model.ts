import { models, model, Schema, Model , ObjectId} from "mongoose";

type Food = {
  _id: ObjectId;
  foodName: string;
  price: string;
  image: string;
  category: ObjectId
};

const FoodSchema = new Schema<Food>(
  {
    _id: { type: Schema.Types.ObjectId },
    foodName: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    category: {type: Schema.Types.ObjectId, ref: "FoodCategory", required: true},
  },
  { timestamps: true },
);


export const FoodModel: Model<Food> =models["Foods"] || model("Foods", FoodSchema);
