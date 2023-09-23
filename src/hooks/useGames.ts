import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";


export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number,
    rating_top: number

}

const useGames = (gamequery:GameQuery) =>
    useData<Game>('/games', {
        params:
        {
            genres: gamequery.selectedGenre?.id,
            platforms: gamequery.selectedPlatform?.id,
            ordering: gamequery.sortOrder,
            search: gamequery.searchtext
        }
    },
        [gamequery.selectedGenre?.id, gamequery.selectedPlatform?.id,gamequery.sortOrder,gamequery.searchtext])

export default useGames;
