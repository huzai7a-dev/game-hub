import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
    onSelectGenre: (genre:Genre)=> void
}

const skeletons = [0, 1, 2, 3, 4, 5, 6, 7];
const GenreList = ({ onSelectGenre }:Props) => {
    const { data: genres, isLoading, errorMessage } = useGenres();

    if (errorMessage) return null;

    if(isLoading) return skeletons.map((s)=> <GenreSkeleton key={s}/>)
    return (
        <List>
            {genres.map((genre) =>
                <ListItem key={genre.id} paddingY={'8px'}>
                    <HStack>
                        <Image
                            src={genre.image_background}
                            boxSize={'32px'}
                            borderRadius={8}
                        />
                        <Button
                            onClick={() => onSelectGenre(genre)}
                            variant={'link'}
                            fontSize={'lg'}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}

export default GenreList;