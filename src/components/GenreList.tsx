import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreSkeleton from "./GenreSkeleton";

const skeletons = [0, 1, 2, 3, 4, 5, 6, 7];
const GenreList = () => {
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
                        <Text fontSize={'lg'}>{genre.name}</Text>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}

export default GenreList;