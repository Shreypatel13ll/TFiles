import fileSystemModel from "../../model/fileSystem.model";
import Stack from "../../utils/Stack";
import { Types } from "mongoose";

export const AddEntry = async (name: string, type: string, content: string, parentId: string) => {
    try {
        const fileSystemEntry = new fileSystemModel({
            name,
            type,
            content: type === 'file' ? content : undefined,
            parent: parentId,
        });
        const newEntry = await fileSystemEntry.save();

        if (parentId) {
            const parent = await fileSystemModel.findById(parentId);
            if (parent) {
                parent.children.push(newEntry._id);
                await parent.save();
            }
        }
    } catch (error: any) {
        if (error.code === 11000) {
            AddEntry(name + "(1)", type, content, parentId);
        } else {
            throw error;
        }
    }
}

export const RenameEntry = async (objectId: string, newName: string) => {
    try {
        const data = await fileSystemModel.findById(objectId);
        if (!data) {
            throw new Error('File not found');
        }
        data.name = newName;
        await data.save();
    } catch (error: any) {
        if (error.code === 11000) {
            RenameEntry(objectId, newName + "(1)");
        } else {
            throw error;
        }
    }
}

export const DeleteEntry = async (objectId: string) => {
    
    const toDelete = await fileSystemModel.findById(objectId);
    if (!toDelete) {
        throw new Error('File not found');
    }
    const stack = new Stack();
    stack.push(objectId);

    while (stack.size() > 0) {
        const currentObjectId = stack.pop();
        const data = await fileSystemModel.findById(currentObjectId);
        if (!data) {
            throw new Error('File not found');
        }
        if (data.type === 'dir') {
            while (data.children.length > 0) {
                stack.push(data.children.pop());
            }
        }
        await fileSystemModel.findByIdAndDelete(currentObjectId);
    }

    const parent = await fileSystemModel.findById(toDelete.parent);
    if (!parent) {
        throw new Error('Parent not found');
    }
    parent.children = parent.children.filter((child: Types.ObjectId) => !child.equals(objectId));
    await parent.save();
}