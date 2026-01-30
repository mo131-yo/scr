import {createFoodCard, getNewFoodCard, getFoodCardItems } from "../controller/card/index";
import express from "express";

export const foodCardRouter = express.Router();

foodCardRouter.post("/add-to-card", createFoodCard);

foodCardRouter.get("/get-food-items", getNewFoodCard);
foodCardRouter.get("/get-new-food", getFoodCardItems);  