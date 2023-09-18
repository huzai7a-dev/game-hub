import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";


const GameGrid = () => {
    const {errorMessage,games} = useGames();
    
    return (
        <>
            {errorMessage && <Text>{errorMessage}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3 }}
                padding={'12px'}
                spacing={10}
            >
                { games.map((game) => <GameCard key={game.id} game={game} />)}
            </SimpleGrid>
        </>
    )    
}

export default GameGrid;