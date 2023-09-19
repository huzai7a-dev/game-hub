import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
    selectedGenre:Genre | null
}

const skeletons = [0, 1, 2, 3, 4, 5, 6];

const GameGrid = ({ selectedGenre }:Props) => {
    const { errorMessage, data:games, isLoading } = useGames(selectedGenre);

    return (
        <>
            {errorMessage && <Text>{errorMessage}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3 }}
                padding={'12px'}
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
        </>
    )
}

export default GameGrid;