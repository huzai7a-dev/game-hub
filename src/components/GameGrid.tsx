import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";


const skeletons = [0, 1, 2, 3, 4, 5, 6];

const GameGrid = () => {
    const { errorMessage, games, isLoading } = useGames();
    
    console.log(isLoading,'isLoading')
    return (
        <>
            {errorMessage && <Text>{errorMessage}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3 }}
                padding={'12px'}
                spacing={10}
            >
                {isLoading && skeletons.map((s)=> <GameCardSkeleton key={s} />)}
                { games.map((game) => <GameCard key={game.id} game={game} />)}
            </SimpleGrid>
        </>
    )    
}

export default GameGrid;