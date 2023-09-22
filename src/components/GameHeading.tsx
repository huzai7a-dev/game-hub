import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface Props {
    gameQuery:GameQuery
}
const GameHeading = ({ gameQuery: { selectedGenre, selectedPlatform } }: Props) => {
    
    const heading = `${selectedPlatform?.name || ''} ${selectedGenre?.name || ''} Games`;

    return (
        <Heading as={'h1'} marginBottom={5} fontSize={'3xl'}>{heading}</Heading>
    )
}

export default GameHeading