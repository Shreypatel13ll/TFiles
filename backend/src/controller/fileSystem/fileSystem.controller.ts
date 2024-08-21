import { Request, Response } from "express";
import fileSystemModel from "../../model/fileSystem.model";
import { AddEntry, RenameEntry, DeleteEntry } from "./fileSystem.helper";

const get = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send({ error: 'id is required' });
    }
    try {
        const data = await fileSystemModel.findById(id);
        if (!data) {
            return res.status(404).send({ error: 'File not found' });
        }
        return res.send(data);
    } catch (error: any) {
        return res.status(500).send({ error: error.message });
    }
}

const create = async (req: Request, res: Response) => {
        let { name, type, content, parentId } = req.body;
        if (!name || !type || !parentId) {
            return res.status(400).send({ error: 'name, type and parentId are required' });
        }
        try {
            const parent = await fileSystemModel.findById(parentId);
            if (!parent) {
                return res.status(404).send({ error: 'Parent not found' });
            }
            await AddEntry(name, type, content, parentId);
            return res.send({ message: 'File created successfully' });
        } catch (error: any) {
            return res.status(500).send({ error: error.message });
        }
}

const rename = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const newName = req.body.newName;
        if (!id || !newName) {
            return res.status(400).send({ error: 'id and newName are required' });
        }
        await RenameEntry(id, newName);
        return res.send({ message: 'File renamed successfully' });
    }
    catch (error: any) {
        return res.status(500).send({ error: error.message });
    }
}

const delete_ = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send({ error: 'id is required' });
        } else if (id === '66be43fd80dd456068a02b02'){
            return res.status(400).send({ error: 'Cannot delete root directory' });
        }
        await DeleteEntry(id as string);
        return res.send({ message: 'File deleted successfully' });
    }
    catch (error: any) {
        return res.status(500).send({ error: error.message });
    }
}

export default { get, create, rename, delete_ };