import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";


export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number

}

const useGames = (gamequery:GameQuery) =>
    useData<Game>('/games', {
        params:
            { genres: gamequery.selectedGenre?.id, platforms: gamequery.selectedPlatform?.id }
    },
        [gamequery.selectedGenre?.id, gamequery.selectedPlatform?.id])

export default useGames;
