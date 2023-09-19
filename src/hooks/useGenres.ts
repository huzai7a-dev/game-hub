import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number,
    name: string,
    slug : string
}

export interface Genre {
    id: number,
    name: string,
}

interface FecthGenreResponse {
    count: number,
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        apiClient.get<FecthGenreResponse>('/genres', {signal:controller.signal})
            .then((res) => {
                setGenres(res.data.results)
                setLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setErrorMessage(err.message)
                setLoading(false)
            })

        return ()=> controller.abort()
    }, [])

    return {genres,errorMessage,isLoading}
}

export default useGenres;
