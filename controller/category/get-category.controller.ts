import { Request, Response } from "express";

export const getCategory = async (req: Request, res: Response) => {
    try{
        res.status(200).json(req.query)    
    }catch(error){
        console.error(error);
         res.status(500).json({message: "Aldaa garlaa"})
    }
}

// export const getNewFood = async ( req: Request, res: Response)=>{
//     try{
//         res.status(200).json(req.body)
//     }catch(error){
//         console.error(error);
//         res.status(500).json({message: "Aldaa garlaa"})
//     }
// }