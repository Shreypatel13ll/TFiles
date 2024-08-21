import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface File {
    __id: string
    name: string
    type: string
    children: File[]
    parent: string
    createdOn: string
    lastModified: string
    __v: number
}

interface FileSystemState {
    root: File | null;
    selectedFile: File | null;
    loading: boolean;
    error: string | null;
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
        fetchRootRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchRootSuccess: (state, action: PayloadAction<File>) => {
            state.root = action.payload;
            state.loading = false;
        },
        fetchRootFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchFolderRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchFolderSuccess: (state, action: PayloadAction<File>) => {
            state.root = action.payload;
            state.loading = false;
        },
        fetchFolderFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        setSelectedFile: (state, action: PayloadAction<File>) => {
            state.selectedFile = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        }
    },
})

export const {
    fetchRootRequest,
    fetchRootSuccess,
    fetchRootFailure,
    fetchFolderRequest,
    fetchFolderSuccess,
    fetchFolderFailure,
    setSelectedFile,
    setLoading,
    setError
} = fileTreeSlice.actions;

export default fileTreeSlice.reducer;