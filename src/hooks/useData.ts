import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";



interface FecthResponse<T> {
    count: number,
    results: T[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useData = <T>(endpoint:string,config?:AxiosRequestConfig,deps?:any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        apiClient.get<FecthResponse<T>>(endpoint, {signal:controller.signal,...config})
            .then((res) => {
                setData(res.data.results)
                setLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setErrorMessage(err.message)
                setLoading(false)
            })

        return ()=> controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps ? [...deps] : [])

    return {data,errorMessage,isLoading}
}

export default useData;
