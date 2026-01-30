import {Router} from "express";
import { createFoodCategory, getCategory } from "../controller/category";

export const foodCategoryRouter = Router();

foodCategoryRouter.post("/create-food-category", createFoodCategory);
foodCategoryRouter.get("/get-category",  getCategory);
// foodCategoryRouter.get("/get-new-food-category", getNewFood);
    

