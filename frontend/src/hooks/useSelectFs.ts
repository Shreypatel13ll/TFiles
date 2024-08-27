import { useSelector, useDispatch } from "react-redux";
import { selectFs } from "@/redux/fileTree/fileTree.slice";
import type { RootState } from "@/redux/store";
import CustomFile from "@/interfaces/CustomFile";

const useSelectFs = () => {
    const selected = useSelector((state: RootState) => state.fileTree.selectedFile);
    const dispatch = useDispatch();
    const select = (file: CustomFile) => {
        dispatch(selectFs(file));
    };
    
    return { selected, select };
};

export default useSelectFs;