import useSelectFs from "@/hooks/useSelectFs"
import useFetchFs from "@/hooks/useFetchFs";
import { FolderIcon, FileIcon } from "lucide-react";

const DisplayFolder = () => {
  const { selected, select } = useSelectFs();
  const fetch = useFetchFs();

  const handleSelect = async(id: string) => {
    const fetchedItems = await fetch(id);    
    select(fetchedItems);
  }
  
  return (
    <div className="flex flex-wrap gap-y-2 gap-x-2">
      {
        selected?.children && (
          selected.children.map((child) => (
            <div className="cursor-pointer w-28 justify-center overflow-hidden" id={child._id} onClick={(e)=>handleSelect(e.currentTarget.id)}>
              {
                typeof child.children[0] == "string" ?
                <FolderIcon strokeWidth={0.5} size="86%" className="mb-[-10px]" /> :
                <FileIcon strokeWidth={0.5} size="86%" className="mb-[-10px]" /> 
              }
              <p className="truncate ml-2" title={child.name}>{child.name}</p>
            </div>
          ))
        )
      }
    </div>
  )
}

export default DisplayFolder