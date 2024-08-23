"use client";

import { TreeView } from "@/components/ui/tree-view/tree-view";
import useFetchFs from "@/hooks/useFetchFs";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { useEffect, useState, useCallback } from "react";
import { TreeViewElement } from "@/components/ui/tree-view/tree-view-api";
import { treeToElem } from "@/utils/treeToElem";

const ExplorerTree = () => {

  const [elements, setElements] = useState<TreeViewElement[]>([]);

  const fetch = useFetchFs();

  const handleFolderExpand = useCallback(async (id: string) => {
    const fetchedItems = await fetch(id); // Fetch the contents of the folder
    const newElem = treeToElem(fetchedItems);

    const traverse = (element: TreeViewElement) => {
      if (element.id === id) {
        element.children = newElem.children;        
        setElements([...elements]);
      } else if (element.children) {
        element.children.forEach(traverse);
      }
    }

    traverse(elements[0]);
  }, [elements]);

  const handleFileSelect = useCallback((id: string) => {
    console.log(`File with id ${id} selected`);
  }, []);

  const tree = useSelector((state: RootState) => state.fileTree.root);

  useEffect(() => {
    if (!tree) {
      return;
    }
    
    setElements([treeToElem(tree)]);

  }, [tree]);

  return (
    <TreeView
      className="h-full"
      initialSelectedId="21"
      elements={elements}
      initialExpendedItems={["root"]}
      onFolderExpand={handleFolderExpand}
      onFileSelect={handleFileSelect}
    />
  );
};

export default ExplorerTree;
