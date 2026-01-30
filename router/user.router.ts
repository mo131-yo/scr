import { createNewUser, getUserByIdAndGet, getUserByIdAndPost } from "../controller";
import { Router } from "express";
import { signUpController } from "../controller/users/Nevterh/sign-up-controller";
import { signInController } from "../controller/users/Nevterh/sign-in-controller";
import { verifyUser } from "../controller/users/verify-user.controller";

export const userRouter = Router();

userRouter.post("/create-user", createNewUser);

userRouter.post("/post-user-by-id-post-request/:groupId/:userId", getUserByIdAndPost);

userRouter.get("/get-user-by-id-get-request/:userId", getUserByIdAndGet);

userRouter.post("/sign-up", signUpController);
userRouter.post("/sign-in", signInController);

userRouter.get("/verify-user", verifyUser);