import { useInfiniteQuery } from "@tanstack/react-query";

import { Platform } from "./usePlatforms";
import APIClient, { FecthResponse } from "../services/api-client";
import useGameQuery from "../store";

const apiClient = new APIClient('/games');

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number,
    rating_top: number

}

const useGames = () => {
    const gamequery = useGameQuery(s => s.gameQuery);
   return useInfiniteQuery<FecthResponse<Game>, Error>({
        queryKey: ['games', gamequery],
        queryFn: ({ pageParam = 1 }) => apiClient.getAll<Game>({
            params: {
                genres: gamequery?.selectedGenreId,
                platforms: gamequery?.selectedPlatformId,
                ordering: gamequery?.sortOrder,
                search: gamequery?.searchText,
                page: pageParam
            }
        }),
        getNextPageParam: (currentPage,allpages) => {
           return currentPage.next ? allpages.length + 1 : undefined
        }
    });
}

export default useGames;
