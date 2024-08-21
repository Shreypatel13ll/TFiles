import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useApi = <T>(url: string, type?: AxiosRequestConfig) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState(null);

    const fetch = async() =>{
        setIsLoading(true);

        try{
            const response: AxiosResponse<T> = await axios(url, type);
            setData(response.data);
        }catch(error: any){
            setError(error);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        fetch();
    },[])

    return {data, isLoading, error};
}

export default useApi;