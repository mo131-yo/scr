import { createNewUser, getUserByIdAndGet, getUserByIdAndPost } from "../controller";
import { Router } from "express";

export const userRouter = Router();

userRouter.post("/create-user", createNewUser);

userRouter.post("/post-user-by-id-post-request/:groupId/:userId", getUserByIdAndPost);

userRouter.get("/get-user-by-id-get-request/:userId", getUserByIdAndGet);