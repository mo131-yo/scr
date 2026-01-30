import {Request, Response} from "express";
import { UserModel } from "../../schema/user.schema";
import bcrypt from "bcrypt";
import jwt, { verify } from "jsonwebtoken";
import { verifyUserEmail } from "../../utils/mail-utils";

export const createNewUser = async (req: Request, res: Response) => {
    try{
        const { name, email, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const token = jwt.sign({ _id: "4567890t"}, "hello", { expiresIn: "2y" });

        const decoded =  jwt.decode(token);
        console.log(decoded);
        const verify = jwt.verify( token, "hello");
        console.log(verify);
        const user = await new UserModel({ name, email, password: hashedPassword });

        await verifyUserEmail(email, `${process.env.BACKEND_API}/users/verify-user?token=${token}`)


        res.status(200).json({message: "Batalgaajuulah Link email ruu chini yvuullaa", data: user, hashedPassword});
    }catch(error){
        console.error(error);
    }
}
