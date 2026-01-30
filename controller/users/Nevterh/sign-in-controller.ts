import { UserModel } from "../../../schema/user.schema";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const signInController = async (req: Request, res: Response) => {
    try{
        const { email, password } = req.body;
        const user = await new UserModel({email});
        if(!user){
            return res.status(404).json({message: "User oldsongui"});
        } 
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if(!isPasswordValid) return res.status(401).json({message: "Password buruu"});

        res.status(200).json({message: "uer amjilttai nevterlee", data: user});
    }catch(error){
        console.error(error);
        res.status(500).json({message: "error garlaa", error: error});
    }
}