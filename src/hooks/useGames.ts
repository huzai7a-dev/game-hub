import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import APIClient, { FecthResponse } from "../services/api-client";

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
    useInfiniteQuery<FecthResponse<Game>, Error>({
        queryKey: ['games', gamequery],
        queryFn: ({ pageParam = 1 }) => apiClient.getAll<Game>({
            params: {
                genres: gamequery.selectedGenre?.id,
                platforms: gamequery.selectedPlatform?.id,
                ordering: gamequery.sortOrder,
                search: gamequery.searchtext,
                page: pageParam
            }
        }),
        getNextPageParam: (currentPage,allpages) => {
           return currentPage.next ? allpages.length + 1 : undefined
        }
    });

export default useGames;
