import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
    id: number,
    name: string
}

interface FecthGameResponse {
    count: number,
    results: Game[]
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        apiClient.get<FecthGameResponse>('/games')
            .then((res) => setGames(res.data.results))
            .catch((err) => setErrorMessage(err.message))
        
    }, [])
    
    return (
        <>
            {errorMessage && <Text>{errorMessage}</Text>}
            <ul>
                { games.map((game) => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    )    
}

export default GameGrid;