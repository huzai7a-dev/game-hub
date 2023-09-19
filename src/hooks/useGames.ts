import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number,
    name: string,
    slug : string
}

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic:number
    
}

interface FecthGameResponse {
    count: number,
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        apiClient.get<FecthGameResponse>('/games', {signal:controller.signal})
            .then((res) => {
                setGames(res.data.results)
                setLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setErrorMessage(err.message)
                setLoading(false)
            })

        return ()=> controller.abort()
    }, [])

    return {games,errorMessage,isLoading}
}

export default useGames;
