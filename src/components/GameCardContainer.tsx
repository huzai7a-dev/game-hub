import { Box } from "@chakra-ui/react"

const GameCardContainer = ({children}: {children:React.ReactNode}) => {
    return (
        <Box width={'300px'} borderRadius={'8px'}>
            {children}
        </Box>
    )
}

export default GameCardContainer;