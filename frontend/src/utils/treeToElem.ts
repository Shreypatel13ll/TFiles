import CustomFile from '../interfaces/CustomFile';
import { TreeViewElement } from '../components/ui/tree-view/tree-view-api';

export const treeToElem = (tree: CustomFile): TreeViewElement => {
    return {
        id: tree._id,
        isSelectable: true,
        name: tree.name,
        children: tree.children.map((child) => {
            if (typeof child === 'string') {
                return {
                    id: child,
                    isSelectable: true,
                    name: "Loading...",   
                };
            }
            return treeToElem(child);
        }),
    };
};