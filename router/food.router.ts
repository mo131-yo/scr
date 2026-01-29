import {Router} from "express";
import { createFoodItem, getFoodItems , getNewFood} from "../controller/foods";

export const foodRouter = Router();

foodRouter.post("/create-food-item", createFoodItem);
foodRouter.get("/get-food-items", getFoodItems);
foodRouter.get("/get-new-food", getNewFood);


