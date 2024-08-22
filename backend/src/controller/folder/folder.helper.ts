import fileSystemModel from "../../model/fileSystem.model";
import { Types } from "mongoose";

export const GetFolder = async (id: string) => {
    if (!id) {
        throw new Error('id is required');
    }
    
    const data = await fileSystemModel.findById(id).populate('children');
    
    if (!data) {
        throw new Error('File not found');
    }

    return data;
}
