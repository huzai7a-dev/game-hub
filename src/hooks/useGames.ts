import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";

const apiClient = new APIClient('/games');

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number,
    rating_top: number

}

const useGames = (gamequery: GameQuery) =>
    useQuery<Game[],Error>({
        queryKey: ['games', gamequery],
        queryFn: () => apiClient.getAll<Game>({
            params: {
                genres: gamequery.selectedGenre?.id,
                platforms: gamequery.selectedPlatform?.id,
                ordering: gamequery.sortOrder,
                search: gamequery.searchtext
            }
        })
    });

export default useGames;
