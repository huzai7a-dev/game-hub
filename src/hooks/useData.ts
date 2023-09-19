import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



interface FecthResponse<T> {
    count: number,
    results: T[]
}

const useData = <T>(endpoint:string) => {
    const [data, setData] = useState<T[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        apiClient.get<FecthResponse<T>>(endpoint, {signal:controller.signal})
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
    }, [endpoint])

    return {data,errorMessage,isLoading}
}

export default useData;
