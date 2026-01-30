import {Request, Response} from "express";
import { verify } from "jsonwebtoken";

export const verifyUser = async (req: Request, res: Response) => {
    console.log(req.query);
    const token = req.query.token as string;

    const decode = verify(token, "hello");
    console.log(decode);
    
    res.status(200).json({message: "amjjilttai verify hiigdlee"})
}