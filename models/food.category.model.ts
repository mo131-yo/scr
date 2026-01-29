import { models, model, Schema, ObjectId} from "mongoose";

type FoodCategory = {
    _id: ObjectId;
    categoryName: string;
    name: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const FoodCategorySchema = new Schema<FoodCategory>({
    _id: { type: Schema.Types.ObjectId},
    categoryName: { type: String, required: true, unique: true},
    name: { type: String, required: true},
    description: { type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
},
{timestamps: true},
)

export const FoodCategoryModel = models["FoodCategory"] || model("FoodCategory", FoodCategorySchema);