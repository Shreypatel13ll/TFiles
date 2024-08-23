import { useSelector, useDispatch } from "react-redux";
import { selectFs } from "@/redux/fileTree/fileTree.slice";
import type { RootState } from "@/redux/store";

const useSelectFs = () => {
    const selected = useSelector((state: RootState) => state.fileTree.selectedFile);
    const dispatch = useDispatch();
    const select = (id: string) => {
        dispatch(selectFs(id));
    };
    
    return { selected, select };
};

export default useSelectFs;