import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import usePlatform from "../hooks/usePlatform"
import useGenre from "../hooks/useGenre"

interface Props {
    gameQuery:GameQuery
}
const GameHeading = ({ gameQuery: { selectedGenreId, selectedPlatformId } }: Props) => {
    const genre = useGenre(selectedGenreId)
    const platform = usePlatform(selectedPlatformId);
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

    return (
        <Heading as={'h1'} marginBottom={5} fontSize={'3xl'}>{heading}</Heading>
    )
}

export default GameHeading