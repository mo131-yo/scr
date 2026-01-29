import {createFoodCard} from "../controller/card";
import express from "express";

export const foodCardRouter = express.Router();

foodCardRouter.post("/add-to-card", createFoodCard);