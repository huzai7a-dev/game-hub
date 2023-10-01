import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";




const skeletons = [0, 1, 2, 3, 4, 5, 6];

const GameGrid = () => {
    const { data: games, isLoading, error, fetchNextPage, hasNextPage } = useGames();

    if (error) return <Text>{error.message}</Text>

    const fetchedGamesCount = games?.pages.reduce(
        (total, page) => total + page.results.length, 0);
    
    return (
            <InfiniteScroll
                hasMore={!!hasNextPage}
                next={() => fetchNextPage()}
                dataLength={fetchedGamesCount || 0}
                loader={<Spinner marginX={'auto'}/>}
            >
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
                    {games?.pages?.map((page, index) =>
                        <React.Fragment key={index}>
                            {page.results.map((game) => (
                                <GameCardContainer key={game.id}>
                                    <GameCard game={game} />
                                </GameCardContainer>
                            ))}
                        </React.Fragment>
                    )}
                </SimpleGrid>
            </InfiniteScroll>
    )
}

export default GameGrid;