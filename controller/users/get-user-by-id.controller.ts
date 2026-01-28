import { Request, Response } from "express";

export const getUserByIdAndGet = async (req: Request, res: Response) => {
    try{
        res.status(200).json(req.query);
    }catch(error){
        console.error(error); 
    }
}

export const getUserByIdAndPost = async (req: Request, res: Response) => {
       try{
 res.status(200).json(req.params);
    }catch(error){
        console.error(error);
    }
}