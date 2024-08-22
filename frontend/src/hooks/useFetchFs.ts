import axios, { AxiosRequestConfig } from 'axios';
import { useDispatch } from 'react-redux';
import { fetchFolderRequest, fetchFolderFailure, fetchFolderSuccess } from '../redux/fileTree/fileTree.slice';
import type File from '../interfaces/CustomFile';

const useFetchFs = (config?: AxiosRequestConfig) => {
    const dispatch = useDispatch();

    const fetcher = async (url: string) => {
        const response = await axios.get<File>(url, config);
        return response.data;
    };

    const fetchData = async (id: string) => {

        dispatch(fetchFolderRequest());

        try {
            const data = await fetcher("http://localhost:3000/api/v1/folder/"+id);
            dispatch(fetchFolderSuccess(data));
            return data;
        } catch (error: any) {
            dispatch(fetchFolderFailure(error.message || 'Failed to fetch folder'));
            throw error;
        }
    };

    return fetchData;
};

export default useFetchFs;
