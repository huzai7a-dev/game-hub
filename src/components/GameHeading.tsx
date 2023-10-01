import { Heading } from "@chakra-ui/react"
import usePlatform from "../hooks/usePlatform"
import useGenre from "../hooks/useGenre"
import useGameQuery from "../store"


const GameHeading = () => {
    const selectedGenreId = useGameQuery(s => s.gameQuery.selectedGenreId);
    const genre = useGenre(selectedGenreId)

    const selectedPlatformId = useGameQuery(s => s.gameQuery.selectedPlatformId);
    const platform = usePlatform(selectedPlatformId);
    
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

    return (
        <Heading as={'h1'} marginBottom={5} fontSize={'3xl'}>{heading}</Heading>
    )
}

export default GameHeading