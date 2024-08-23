import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type CustomFile from '../../interfaces/CustomFile'

interface FileSystemState {
    root: CustomFile | null
    selectedFile: string | null
    loading: boolean
    error: string | null
}

const initialState: FileSystemState = {
    root: null,
    selectedFile: null,
    loading: false,
    error: null,
}

const fileTreeSlice = createSlice({
    name: 'fileTree',
    initialState,
    reducers: {
        fetchFolderRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchFolderSuccess: (state, action: PayloadAction<CustomFile>) => {
            if (state.root) {
                const updateFolder = (folder: CustomFile): CustomFile => {
                    if (folder._id === action.payload.parent) {
                        return { ...folder, children: [...folder.children, action.payload] };
                    }
                    if (folder.type !== 'folder') {
                        return folder;
                    }
                    return { ...folder, children: folder.children.map(updateFolder) };
                };
                state.root = updateFolder(state.root);
            } else {
                state.root = action.payload;
            }
            state.loading = false;
        },
        fetchFolderFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        selectFs: (state, action: PayloadAction<string>) => {
            state.selectedFile = action.payload;
        }

    },
});


export const {
    fetchFolderRequest,
    fetchFolderSuccess,
    fetchFolderFailure,
    selectFs,
} = fileTreeSlice.actions;

export default fileTreeSlice.reducer;