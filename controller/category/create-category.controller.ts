import { Request, Response} from "express";
import { FoodModel} from "../../models/food.model";

export const createFoodCategory = async ( req: Request, res: Response)=>{
    try{
        const newFood = await FoodModel.find().sort ({createdAt: -1}).limit(10);
        res.status(200).json(newFood);
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Aldaa garlaa"})
    }
}