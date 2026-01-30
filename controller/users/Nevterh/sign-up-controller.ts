import { UserModel } from "../../../schema/user.schema";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verifyUserEmail } from "../../../utils/mail-utils";

export const signUpController = async (req: Request, res: Response) => {
    try{
        const {name, email, password } = req.body;

        const hashedPassword = bcrypt.hashSync( password, 10)
        console.log(hashedPassword);
        
        const createNewUser = await new UserModel({ name, email, password: hashedPassword });

        const token = jwt.sign({ _id: createNewUser._id}, "hello", { expiresIn: "2y" });

        const decoded =  jwt.decode(token);
        console.log(decoded);

        const verify = jwt.verify( token, "hello");
        console.log(verify);

        await verifyUserEmail(email, `${process.env.BACKEND_API}/users/verify-user?token=${token}`)

        const isPasswordValid = await bcrypt.compare(password, hashedPassword);

        const user = await new UserModel({ name, email, password: hashedPassword });

        res.status(200).json({message: "User amjilttai burtgegdlee", data: user, verify, token, decoded, isPasswordValid});
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Aldaa garlaa"});
    }
}