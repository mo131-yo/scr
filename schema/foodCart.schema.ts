import mongoose, {models, Schema} from "mongoose";  

  export const FoodCardSchema = new Schema({
        foodId: { type: Schema.Types.ObjectId, ref: "Food", required: true},
        foodName: { type: String, required: true},
        foodPrice: { type: String, required: true},
        foodImage: { type: String },
        foodQuantity: { type: Number, required: true},
        quantity: { type: Number, default: 1},
        createdAt: { type: Date, default: Date.now},
        updatedAt: { type: Date, default: Date.now},
    });

    export const FoodCardModel = models["FoodCard"] || mongoose.model("FoodCard", FoodCardSchema);