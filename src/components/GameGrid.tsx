import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";


interface Props {
    gameQuery:GameQuery
}

const skeletons = [0, 1, 2, 3, 4, 5, 6];

const GameGrid = ({ gameQuery }:Props) => {
    const { errorMessage, data:games, isLoading } = useGames(gameQuery);

    if (errorMessage) return <Text>{errorMessage}</Text>
    
    return (
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3 }}
                paddingY={'12px'}
                spacing={4}
            >
                {isLoading && skeletons.map((s) =>
                    <GameCardContainer key={s}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                )}
                {games.map((game) =>
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                )}
            </SimpleGrid>
    )
}

export default GameGrid;