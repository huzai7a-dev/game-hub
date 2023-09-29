import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
    onSelectGenre: (genreId:number)=> void
}

const skeletons = [0, 1, 2, 3, 4, 5, 6, 7];
const GenreList = ({ onSelectGenre }:Props) => {
    const { data: genres, isLoading, error } = useGenres();

    if (error) return error.message;

    if(isLoading) return skeletons.map((s)=> <GenreSkeleton key={s}/>)
    return (
        <>
            <Heading fontSize={'2xl'} marginBottom={2}>Genres</Heading>
            <List>
                {genres?.results?.map((genre) =>
                    <ListItem key={genre.id} paddingY={'8px'}>
                        <HStack>
                            <Image
                                src={genre.image_background}
                                boxSize={'32px'}
                                borderRadius={8}
                                objectFit={'cover'}
                                />
                            <Button
                                onClick={() => onSelectGenre(genre.id)}
                                variant={'link'}
                                fontSize={'lg'}
                                whiteSpace={'normal'}
                                textAlign={'left'}
                                >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                )}
            </List>
        </>
    )
}

export default GenreList;