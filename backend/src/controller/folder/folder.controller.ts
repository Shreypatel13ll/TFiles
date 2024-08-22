import { Request, Response } from "express";
import { GetFolder } from "./folder.helper";

export const GetFolderController = async (req: Request, res: Response) => {
    try {
        let id = req.params.id;
        if (id == "root"){
            id = "66be43fd80dd456068a02b02";
        }
        const data = await GetFolder(id);
        res.status(200).json(data);
    } catch (error: any) {
        console.log(error);
        
        res.status(400).json({ message: error.message });
    }
}